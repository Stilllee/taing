import useFilterData, { filterDataByPage } from '@/hooks/useFilterData';
import styles from './Detail.module.scss';
import { useEffect, useState } from 'react';
import { IImageData } from '@/type';
import SwiperContent from '@/components/common/SwiperContent/SwiperContent';
import { SVGAttributes } from 'react';

enum FilterTypes {
  MUST = 'must',
}

const Detail = () => {
  const { filterData } = useFilterData('main');
  const [onlySwipeSmall, setOnlySwipeSmall] = useState<IImageData[]>([]);

  useEffect(() => {
    setOnlySwipeSmall(filterDataByPage(filterData, 'main', 'large'));
  }, [filterData]);

  useEffect(() => {
    console.log(filterData);
  }, [filterData, onlySwipeSmall]);
  return (
    <div className={styles.detail}>
      <div className={styles.background}>
        <img src={filterData[2]?.main?.must} />
      </div>
      <div className={styles.detailInfo}>
        <img src={filterData[2]?.main?.must} />
        <h2 className={styles.title}>최강야구</h2>
        <button className={styles.watchBtn}>
          <PlayIcon /> 시청하기
        </button>
        <ul className={styles.icons}>
          <li>
            <button className={styles.iconBtn}>
              <HeartIcon />찜
            </button>
          </li>
          <li>
            <button className={styles.iconBtn}>
              <ArrowUpTrayIcon />
              공유
            </button>
          </li>
        </ul>
      </div>
      <div>
        <SwiperContent
          title={'비슷한 TV프로그램'}
          filterType={FilterTypes.MUST}
        />
      </div>
    </div>
  );
};
export default Detail;

function ArrowUpTrayIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}
function HeartIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}
function PlayIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
      />
    </svg>
  );
}
