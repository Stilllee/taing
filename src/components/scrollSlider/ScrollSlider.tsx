import ScrollTitle from '@components/ScrollTitle/ScrollTitle';
import './ScrollSlider.scss';
import { IImageData } from 'src/type';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Mousewheel } from 'swiper/modules';
interface IScrollSlider {
  onlySwipeSmall: IImageData[];
  onlySwipeLarge: IImageData[];
}
const ScrollSlider = ({ onlySwipeSmall, onlySwipeLarge }: IScrollSlider) => {
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
    <div className="scroll_section_2" ref={introRef}>
      <ScrollTitle
        title="티빙에만 있는 재미"
        subtitle="오리지널 콘텐츠를 만나보세요!"
        paragraph="차별화된 웰메이드 오리지널 콘텐츠"
      />
      <div className="intro">
        {/* 모바일 / 테블릿 슬라이드 */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          centeredSlides
          mousewheel={{ releaseOnEdges: true }}
          keyboard={{
            enabled: true,
          }}
          modules={[Mousewheel, Keyboard]}
          freeMode={true}
        >
          {onlySwipeSmall.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="img_wrapper" key={item.id}>
                <img src={item?.onBoarding?.small} alt={item?.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 데스크탑 슬라이드 */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={24}
          centeredSlides
          mousewheel={{ releaseOnEdges: true, sensitivity: 10 }}
          keyboard={{
            enabled: true,
          }}
          modules={[Mousewheel, Keyboard]}
          freeMode={true}
        >
          {onlySwipeLarge.map((item, index) => (
            <SwiperSlide key={index}>
              <div key={item.id}>
                <img src={item?.onBoarding?.large} alt={item?.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ScrollSlider;
