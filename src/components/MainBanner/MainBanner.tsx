import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import styles from './MainBanner.module.scss';
import Button from '@components/common/Button/Button';
import { Autoplay, EffectFade } from 'swiper/modules';
import { IImageData } from '@/type';
import { useState, useRef } from 'react';

interface IMainBannerProps {
  filterData: IImageData[];
  moveDetailPage: (id: string) => void;
}

const MainBanner = ({ filterData, moveDetailPage }: IMainBannerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const swiperRef = useRef<SwiperRef>(null);

  const toggleAutoplay = () => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance && swiperInstance.autoplay) {
      isPlaying
        ? swiperInstance.autoplay.stop()
        : swiperInstance.autoplay.start();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.mainSwiperContent}>
      <Swiper
        ref={swiperRef}
        className={styles.mainSwiperContainer}
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        effect={'fade'}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
      >
        {filterData.map((item: IImageData) => (
          <SwiperSlide className={styles.mainSlide} key={item.id}>
            <img src={item.main?.banner} alt={item.name} />
            <Button
              onClick={() => moveDetailPage(item.id)}
              type={'button'}
              state={'default'}
              title={'자세히보기'}
            />
          </SwiperSlide>
        ))}
        <button
          className={`${styles.autoplayButton} ${
            isPlaying ? styles.pause : styles.play
          }`}
          onClick={toggleAutoplay}
        />
      </Swiper>
    </div>
  );
};

export default MainBanner;
