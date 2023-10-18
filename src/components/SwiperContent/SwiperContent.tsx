import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './SwiperContent.module.scss';
import useFilterData from '@/hooks/useFilterData';
import MainBanner from '@/components/MainBanner/MainBanner';
import { IImageData } from '@/type';
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

  const navigate = useNavigate();

  const moveDetailPage = (id: string) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      {filterType === 'banner' ? (
        <MainBanner filterData={filterData} moveDetailPage={moveDetailPage} />
      ) : (
        <div className={styles.SwiperContent}>
          <h2 className={styles.title}>{title}</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              el: '.my-swiper-pagination',
              clickable: true,
              renderBullet: (_index, className) => {
                return `<span class="${className} ${styles.bullet}"></span>`;
              },
            }}
            className={styles.swiperContainer}
            slidesPerView={SLIDES_PER_VIEW_AUTO}
            slidesPerGroup={3}
            allowTouchMove={!['sports', 'event'].includes(filterType)}
            autoplay={filterType === 'event' ? { delay: 10000 } : false}
          >
            <div
              className={
                filterType === 'sports' || filterType === 'event'
                  ? styles.hidePagination
                  : ''
              }
            >
              <div className={`my-swiper-pagination ${styles.pagination}`} />
            </div>
            {filterData.map((item: IImageData, index: number) => (
              <SwiperSlide className={classNames} key={item.id}>
                <div
                  className={styles.programWrapper}
                  onClick={
                    filterType === 'sports' || filterType === 'event'
                      ? undefined
                      : () => moveDetailPage(item.id)
                  }
                >
                  <img src={item.main?.[filterType]} alt={item.name} />
                  <span data-index={index + 1}>
                    {item.name}
                    {filterType === 'popular' && (
                      <div className={styles.redCircle}></div>
                    )}
                  </span>
                </div>
              </SwiperSlide>
            ))}
            <div
              className={
                filterType === 'sports' || filterType === 'event'
                  ? styles.hideButton
                  : styles.sliderButton
              }
            >
              <div className={`swiper-button-prev ${styles.prevButton}`} />
              <div className={`swiper-button-next ${styles.nextButton}`} />
            </div>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default SwiperContent;
