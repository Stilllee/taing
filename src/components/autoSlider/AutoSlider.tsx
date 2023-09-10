import ScrollTitle from '@components/scrollTitle/ScrollTitle';
import styles from './AutoSlider.module.scss';
import { IImageData } from 'src/type';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AutoSingleSlide from '@components/autoSingleSlide/AutoSingleSlide';

interface AutoSliderProps {
  findSwipe: IImageData[];
}
const AutoSlider = ({ findSwipe }: AutoSliderProps) => {
  const autoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.fromTo(
        '.intro',
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
      );
    }, autoRef);

    return () => ctx.revert();
  }, [autoRef]);

  return (
    <div className={styles.scroll_section_3} ref={autoRef}>
      <ScrollTitle
        title="내가 찾던 재미"
        subtitle="보고 싶은 콘텐츠를 발견하세요!"
        paragraph="최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점"
      />
      <div className={styles.swipe_outer}>
        <div className={`${styles.swipe_2} intro`}>
          <div className={`${styles.origin}`}>
            {findSwipe.map((item, index) => (
              <AutoSingleSlide key={index} item={item} />
            ))}
          </div>
          <div className={`${styles.copy}`}>
            {findSwipe.map((item, index) => (
              <AutoSingleSlide key={index} item={item} />
            ))}
          </div>
        </div>
        <div className={`${styles.swipe_2}  intro`}>
          <div className={`${styles.origin}`}>
            {findSwipe.map((_, index) => (
              <AutoSingleSlide
                key={index}
                item={findSwipe[findSwipe.length - 1 - index]}
              />
            ))}
          </div>
          <div className={`${styles.copy}`}>
            {findSwipe.map((_, index) => (
              <AutoSingleSlide
                key={index}
                item={findSwipe[findSwipe.length - 1 - index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
