import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-fade';
import styles from './MainBanner.module.scss';
import Button from '@components/common/Button/Button';
import { IImageData } from '@/type';

interface IMainBannerProps {
  filterData: IImageData[];
  moveDetailPage: (id: string) => void;
}

const MainBanner = ({ filterData, moveDetailPage }: IMainBannerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const slideCount = filterData.length;

  const toggleAutoplay = () => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance && swiperInstance.autoplay) {
      isPlaying
        ? swiperInstance.autoplay.stop()
        : swiperInstance.autoplay.start();
      setIsPlaying(!isPlaying);
    }
  };

  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (currentIndex === slideCount - 1) {
        swiperRef.current.swiper.slideTo(0, 500);
        setCurrentIndex(0);
      } else {
        swiperRef.current.swiper.slideNext();
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }
  };

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (currentIndex === 0) {
        swiperRef.current.swiper.slideTo(slideCount - 1, 500);
        setCurrentIndex(slideCount - 1);
      } else {
        swiperRef.current.swiper.slidePrev();
        setCurrentIndex(prevIndex => prevIndex - 1);
      }
    }
  };

  const changeSlide = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index, 500);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (isPlaying) nextSlide();
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [isPlaying, currentIndex]);

  return (
    <div className={styles.mainSwiperContent}>
      <Swiper
        ref={swiperRef}
        className={styles.mainSwiperContainer}
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        effect={'fade'}
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
          aria-label={
            isPlaying
              ? '메인배너 슬라이드를 일시정지'
              : '메인배너 슬라이드를 재생'
          }
        />
        <div className={styles.mainSwiperNavigation}>
          <div
            onClick={prevSlide}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                prevSlide();
              }
            }}
            className={`swiper-button-prev ${styles.prevButton}`}
            role="button"
            aria-label="메인배너 슬라이드 이전 슬라이드"
            tabIndex={0}
          />
          <div
            onClick={nextSlide}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                nextSlide();
              }
            }}
            className={`swiper-button-next ${styles.nextButton}`}
            role="button"
            aria-label="메인배너 슬라이드 다음 슬라이드"
            tabIndex={0}
          />
        </div>
      </Swiper>
      <div className={styles.pageButton}>
        {Array.from({ length: slideCount }).map((_, index) => (
          <span
            onClick={() => changeSlide(index)}
            key={index}
            className={`${styles.default} ${
              index === currentIndex ? styles.active : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
