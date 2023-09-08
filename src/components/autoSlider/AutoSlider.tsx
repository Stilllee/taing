import ScrollTitle from '@components/scrollTitle/ScrollTitle';
import styles from './AutoSlider.module.scss';
import { IImageData } from 'src/type';

interface AutoSliderProps {
  findSwipe: IImageData[];
}
const AutoSlider = ({ findSwipe }: AutoSliderProps) => {
  return (
    <div className={styles.scroll_section_3}>
      <ScrollTitle
        title="내가 찾던 재미"
        subtitle="보고 싶은 콘텐츠를 발견하세요!"
        paragraph="최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점"
      />
      <div className={styles.swipe_2}>
        {findSwipe.map(item => (
          <div key={item.id}>
            <img src={item?.onBoarding?.medium} alt={item?.name} />
          </div>
        ))}
      </div>
      <div className={styles.swipe_2}>
        {findSwipe
          .slice()
          .reverse()
          .map(item => (
            <div key={item.id}>
              <img src={item?.onBoarding?.medium} alt={item?.name} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AutoSlider;
