import { useState } from 'react';
import styles from './Home.module.scss';
import Modal from '@components/common/Modal/Modal';
import PopupModal from '@components/PopupModal/PopupModal';
import SwiperContent from '@components/common/SwiperContent/SwiperContent.tsx';
import Button from '@/components/common/Button/Button';

enum FilterTypes {
  MUST = 'must',
  QUICK = 'quick',
  POPULAR = 'popular',
  LIVE = 'live',
  ONLY = 'only',
  SPORTS = 'sports',
  EVENT = 'event',
}

export interface ISwiperContentProps {
  title: string;
  filterType: FilterTypes;
}

const contentConfig: ISwiperContentProps[] = [
  { title: '티빙에서 꼭 봐야하는 콘텐츠', filterType: FilterTypes.MUST },
  { title: 'Quick VOD', filterType: FilterTypes.QUICK },
  { title: '실시간 인기 프로그램', filterType: FilterTypes.POPULAR },
  { title: '인기 LIVE 채널', filterType: FilterTypes.LIVE },
  { title: '오직 타잉에만 있어요', filterType: FilterTypes.ONLY },
  { title: '', filterType: FilterTypes.SPORTS },
  { title: '이벤트', filterType: FilterTypes.EVENT },
];

const Home = () => {
  // 팝업이 처음에 보이도록 상태값을 설정
  const [popupVisible, setPopupVisible] = useState<boolean>(true);
  const [clickedIndex, setClickedIndex] = useState<null | number>(null);
  const [isPlayBoxClicked, setIsPlayBoxClicked] = useState<boolean>(false);

  const closePopup = () => setPopupVisible(false);
  const handleClickCircle = (index: number) => {
    setClickedIndex(index);
  };
  const togglePlayBox = () => {
    setIsPlayBoxClicked(!isPlayBoxClicked);
  };

  return (
    <div className={styles.Home}>
      <div className={styles.mainBanner}>
        <img src="/src/assets/images/main_banner.png" alt="재벌집 막내아들" />
        <p>인생 2회차를 사는 판타지 드라마</p>
        <Button type={'button'} state={'default'} title={'자세히보기'} />
        <div className={styles.pageBox}>
          <div onClick={togglePlayBox} className={styles.playBox}>
            {isPlayBoxClicked ? (
              <div className={styles.triangle}></div>
            ) : (
              <>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
              </>
            )}
          </div>
          <div className={styles.circleBox}>
            {[0, 1, 2, 3].map((_, index) => (
              <div
                key={index}
                onClick={() => handleClickCircle(index)}
                className={`${styles.circle} ${
                  clickedIndex === index ? styles.clickedCircle : ''
                }`}
              />
            ))}
          </div>
        </div>
        <div className={styles.prevBtn} />
        <div className={styles.nextBtn} />
      </div>
      {contentConfig.map((config, index) => (
        <SwiperContent
          key={index}
          title={config.title}
          filterType={config.filterType}
        />
      ))}
      {popupVisible && (
        <Modal>
          <PopupModal closePopup={closePopup} />
        </Modal>
      )}
    </div>
  );
};
export default Home;
