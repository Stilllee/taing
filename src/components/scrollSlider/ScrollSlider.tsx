import ScrollTitle from '@components/scrollTitle/ScrollTitle';
import styles from './ScrollSlider.module.scss';
import { IImageData } from 'src/type';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface IScrollSlider {
  onlySwipeSmall: IImageData[];
  onlySwipeLarge: IImageData[];
}
const ScrollSlider = ({ onlySwipeSmall, onlySwipeLarge }: IScrollSlider) => {
  const sliderRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const slider = sliderRef.current;
    // ScrollTrigger 설정
    gsap.to(slider, { opacity: 1 });
  }, []);

  return (
    <div className={styles.scroll_section_2} ref={introRef}>
      <ScrollTitle
        title="티빙에만 있는 재미"
        subtitle="오리지널 콘텐츠를 만나보세요!"
        paragraph="차별화된 웰메이드 오리지널 콘텐츠"
      />
      <div className={`${styles.swipe_1} intro`} ref={sliderRef}>
        <div className={styles.small}>
          {onlySwipeSmall.map(item => (
            <div className="single_slide" key={item.id}>
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
