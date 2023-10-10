import { currentTimes } from '@/utils/currentTimes';
import styles from './SearchModal.module.scss';
import { useReadData } from '@/hooks/useReadData';
import { useState } from 'react';
import { useCustomNavigate } from '@/hooks/useCustomNavigate';

type SearchModalProps = {
  onClose: () => void;
};

interface IImageResult {
  url: string | undefined;
  name: string | undefined;
  id: string;
}

const SearchModal = ({ onClose }: SearchModalProps) => {
  const popularSearches = [
    '러브캐처 인 발리',
    '술꾼도시여자들2',
    '재벌집 막내아들',
    '환혼: 빛과 그림자',
    '캐나다 체크인',
    '놀라운 토요일',
    'SHOW ME THE MONEY 11',
    '알쓸인잡',
    '블랙독',
    '환승연애2',
  ];

  const { data, readData } = useReadData('images');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedImgs, setSearchedImgs] = useState<IImageResult[]>([]);

  const { navigateTo } = useCustomNavigate();

  const handleContentClick = (id: string) => {
    navigateTo(`/detail/${id}`);
    setTimeout(() => {
      onClose();
    }, 100);
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    if (inputValue === '') {
      setSearchedImgs([]);
      return;
    }

    await readData();

    // 검색어를 정규화 (띄어쓰기 제거)
    const normalizedInput = inputValue.replace(/\s+/g, '');

    // 데이터에서 검색어와 일치하는 항목 필터링
    const matchedDataArray = data.filter(
      d =>
        d.name &&
        d.name.replace(/\s+/g, '').toLowerCase().includes(normalizedInput),
    );

    const resultImages = matchedDataArray
      .map(matchedData => {
        const imageUrl =
          matchedData.main?.must ||
          matchedData.main?.popular ||
          matchedData.main?.only;
        return { id: matchedData.id, url: imageUrl, name: matchedData.name };
      })
      .filter(img => img.url);

    setSearchedImgs(resultImages);
  };

  // 검색어 강조 함수: 검색어와 일치하는 부분을 highlighted 클래스로 강조
  const highlightSearchTerm = (text: string, term: string) => {
    // 1. 검색어의 각 문자 사이에 정규식의 '\s*' 패턴(0개 이상의 띄어쓰기를 의미)을 추가한다.
    // 예: '인생' -> '인\s*생'
    const spacedTerm = term.split('').join('\\s*');

    // 2. 위에서 만든 패턴을 이용해 정규식 객체를 생성한다. 'gi' 플래그로 전체 문자열에서
    // 모든 일치 항목을 찾으며 대소문자를 구분하지 않는다.
    const regex = new RegExp(`(${spacedTerm})`, 'gi');

    // 3. 원본 문자열에서 정규식에 일치하는 부분을 찾아 styles.highlighted 클래스가 적용된 span 요소로 감싼다.
    // 예: 원본 '인생에 한 번' + 검색어 '인생' -> '<span class="highlighted">인생</span>에 한 번'
    return text.replace(regex, `<span class="${styles.highlighted}">$1</span>`);
  };

  return (
    <>
      <div className={styles.searchModal}>
        <form className={styles.search}>
          <input
            onChange={handleInputChange}
            placeholder="TV프로그램, 영화 제목으로 검색해보세요"
          />
          <div className={styles.searchIcon}></div>
        </form>
        <div className={searchedImgs.length > 0 ? styles.contentContainer : ''}>
          {searchedImgs.length > 0 ? (
            searchedImgs.map((imgData, index) => (
              <div
                className={styles.content}
                key={index}
                onMouseDown={() => handleContentClick(imgData.id)}
              >
                <img
                  className={styles.searchImg}
                  src={imgData.url}
                  alt={`검색 결과 이미지 ${index + 1}`}
                />
                <span
                  className={styles.imageName}
                  dangerouslySetInnerHTML={{
                    __html: highlightSearchTerm(imgData.name || '', searchTerm),
                  }}
                ></span>
              </div>
            ))
          ) : (
            <div className={styles.searchList}>
              <div className={styles.recentSearches}>
                <h2>최근 검색어</h2>
                <ul>
                  <li>검색 내역이 없습니다.</li>
                </ul>
              </div>
              <div className={styles.popularList}>
                <h2>실시간 인기 검색어</h2>
                <ul>
                  {popularSearches.map((search, index) => (
                    <li key={index}>
                      <span>{index + 1}</span>
                      {search}
                    </li>
                  ))}
                </ul>
                <div
                  className={styles.currentTime}
                >{`${currentTimes()} 기준`}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.overlay} />
    </>
  );
};

export default SearchModal;
