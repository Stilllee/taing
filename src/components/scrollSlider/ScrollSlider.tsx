import ScrollTitle from '@components/scrollTitle/ScrollTitle';
import styles from './ScrollSlider.module.scss';
import { IImageData } from 'src/type';

interface IScrollSlider {
  onlySwipeSmall: IImageData[];
  onlySwipeLarge: IImageData[];
}
const ScrollSlider = ({ onlySwipeSmall, onlySwipeLarge }: IScrollSlider) => {
  return (
    <div className={styles.scroll_section_2}>
      <ScrollTitle
        title="티빙에만 있는 재미"
        subtitle="오리지널 콘텐츠를 만나보세요!"
        paragraph="차별화된 웰메이드 오리지널 콘텐츠"
      />
      <div className={styles.swipe_1}>
        <div className={styles.small}>
          {onlySwipeSmall.map(item => (
            <div key={item.id}>
              <img src={item?.onBoarding?.small} alt={item?.name} />
            </div>
          ))}
        </div>
        <div className={styles.large}>
          {onlySwipeLarge.map(item => (
            <div key={item.id}>
              <img src={item?.onBoarding?.large} alt={item?.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;
