import styles from './SwiperContent.module.scss';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IImageData } from '@/type';
import useFilterData from '@/hooks/useFilterData';
import { ISwiperContentProps } from '@/pages/Home/Home';

const SLIDES_PER_VIEW_AUTO = 'auto';
const FILTER_MAIN = 'main';

const SwiperContent = ({ title, filterType }: ISwiperContentProps) => {
  const { filterData } = useFilterData(FILTER_MAIN, filterType);
  const classNames = [
    styles.slideWrapper,
    filterType === 'quick' || filterType === 'live'
      ? styles.slideWrapperHorizontal
      : '',
    filterType === 'popular' ? styles.popular : '',
    filterType === 'live' ? styles.live : '',
    filterType === 'only' ? styles.only : '',
    filterType === 'sports' ? styles.sports : '',
    filterType === 'event' ? styles.event : '',
  ].join(' ');
  return (
    <div className={styles.SwiperContent}>
      <h2 className={styles.title}>{title}</h2>
      <Swiper
        className={styles.swiperContainer}
        slidesPerView={SLIDES_PER_VIEW_AUTO}
      >
        {filterData.map((item: IImageData, index: number) => (
          <SwiperSlide className={classNames} key={item.id}>
            <img src={item.main?.[filterType]} alt={item.name} />
            <span data-index={index + 1}>
              {item.name}
              {filterType === 'popular' && (
                <div className={styles.redCircle}></div>
              )}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContent;
