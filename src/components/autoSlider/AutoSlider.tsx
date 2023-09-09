import ScrollTitle from '@components/scrollTitle/ScrollTitle';
import styles from './AutoSlider.module.scss';
import { IImageData } from 'src/type';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AutoSliderProps {
  findSwipe: IImageData[];
}
const AutoSlider = ({ findSwipe }: AutoSliderProps) => {
  const introRef = useRef<HTMLDivElement>(null);

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
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.scroll_section_3} ref={introRef}>
      <ScrollTitle
        title="내가 찾던 재미"
        subtitle="보고 싶은 콘텐츠를 발견하세요!"
        paragraph="최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점"
      />
      <div className={`${styles.swipe_2} intro`}>
        {findSwipe.map(item => (
          <div key={item.id}>
            <img src={item?.onBoarding?.medium} alt={item?.name} />
          </div>
        ))}
      </div>
      <div className={`${styles.swipe_2} intro`}>
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
