import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './Home.module.scss';
import Modal from '@components/common/Modal/Modal';
import PopupModal from '@components/PopupModal/PopupModal';
import useFilterData from '../../hooks/useFilterData';
import { IImageData } from '../../type.ts';

const Home = () => {
  const [popupVisible, setPopupVisible] = useState(true);

  const { filterData, isLoading } = useFilterData('main', 'must');

  const closePopup = () => setPopupVisible(false);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <div className={styles.Home}>
      <div className={styles.must}>
        <h2 className={styles.title}>티빙에서 꼭 봐야하는 콘텐츠</h2>
        <Swiper className={styles.swiperContainer} slidesPerView={'auto'}>
          {filterData.map((item: IImageData) => (
            <SwiperSlide className={styles.slideWrapper} key={item.id}>
              <img src={item.main?.must} alt={item.name} />
              <p>{item.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {popupVisible && (
        <Modal>
          <PopupModal closePopup={closePopup} />
        </Modal>
      )}
    </div>
  );
};
export default Home;
