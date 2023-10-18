import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import Modal from '@components/common/Modal/Modal';
import PopupModal from '@components/PopupModal/PopupModal';
import SwiperContent from '@/components/SwiperContent/SwiperContent';
import { useAuthState } from '@/hooks/auth';
import Loader from '@/components/Loader/Loader';
import { useCustomNavigate } from '@/hooks/useCustomNavigate';
import { hasDayPassed } from '@/utils/hasDayPassed';

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
  // 로컬 스토리지 값에 따라 팝업에 대한 초기값을 설정
  const shouldShowPopup = () => {
    const hideForToday = localStorage.getItem('hideForToday');
    return !(hideForToday && !hasDayPassed(hideForToday));
  };
  const [popupVisible, setPopupVisible] = useState<boolean>(shouldShowPopup());

  const { isLoading, user } = useAuthState();
  const closePopup = () => setPopupVisible(false);
  const { navigateTo } = useCustomNavigate();

  useEffect(() => {
    if (isLoading && user === null) {
      navigateTo('/onboarding', true);
    }
  }, [isLoading, user]);

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
