import useFilterData, { filterDataByPage } from '@/hooks/useFilterData';
import styles from './Detail.module.scss';
import { useEffect, useState } from 'react';
import { IImageData } from '@/type';
import SwiperContent from '@/components/common/SwiperContent/SwiperContent';

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
      <div className={styles.detailInfo}>
        <img src={filterData[2]?.main?.must} />
        <h2 className={styles.title}>최강야구</h2>
        <button>시청하기</button>
        <ul className={styles.icons}>
          <li>찜</li>
          <li>공유</li>
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
