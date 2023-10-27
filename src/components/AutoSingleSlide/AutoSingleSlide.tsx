import { IImageData } from 'src/type';
import styles from './AutoSingleSlide.module.scss';

interface IAutoSingleSlide {
  item: IImageData;
}

const AutoSingleSlide = ({ item }: IAutoSingleSlide) => {
  return (
    <div key={item.id} className={styles.single_slide}>
      <img src={item.onBoarding?.medium} alt={item.name} loading="lazy" />
    </div>
  );
};

export default AutoSingleSlide;
