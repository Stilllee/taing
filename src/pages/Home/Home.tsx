import { useState } from 'react';
import styles from './Home.module.scss';
import Modal from '@components/common/Modal/Modal';
import PopupModal from '@components/PopupModal/PopupModal';
import SwiperContent from '@/components/SwiperContent/SwiperContent';
import { useAuthState } from '@/hooks/auth';
import Loader from '@/components/Loader/Loader';

enum FilterTypes {
  BANNER = 'banner',
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
  { title: '메인배너', filterType: FilterTypes.BANNER },
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
  const { isLoading,user } = useAuthState();
  const closePopup = () => setPopupVisible(false);

  console.log(user)
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.Home}>
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
