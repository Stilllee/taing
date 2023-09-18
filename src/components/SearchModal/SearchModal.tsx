import { currentTimes } from '@/utils/currentTimes';
import styles from './SearchModal.module.scss';

const SearchModal = () => {
  const popularSearches = [
    '재벌집 막내아들',
    '미스터트롯2: 새로운 전설의 시작',
    '유 퀴즈 온 더 블럭',
    '대행사',
    'SHOW ME THE MONEY 11',
    '미씽:그들이 있었다2',
    '술꾼도시여자들2',
    '캐나다 체크인',
    '미씽:그들이 있었다 - 그들을 다만나다',
    '술꾼도시여자들',
  ];

  return (
    <>
      <div className={styles.searchModal}>
        <form className={styles.search}>
          <input placeholder="TV프로그램, 영화 제목 및 출연진으로 검색해보세요" />
          <button className={styles.searchIcon} />
        </form>
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
            <div className={styles.currentTime}>{`${currentTimes()} 기준`}</div>
          </div>
        </div>
      </div>
      <div className={styles.overlay} />
    </>
  );
};

export default SearchModal;
