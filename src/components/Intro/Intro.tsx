import TaingButton from '@components/TaingButton/TaingButton';
import styles from './Intro.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface IIntro {
  background: string | undefined;
}

const Intro = ({ background }: IIntro) => {
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.fromTo(
        '.intro',
        {
          opacity: 0,
          y: 100,
        },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, delay: 0.4 },
      );
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.scroll_section_1} ref={introRef}>
      <img src={background} className="intro" alt="온보딩 페이지 배경화면" />
      <div className={styles.shadow} />
      <p className={`${styles.title} intro`}>
        티빙 오리지널 콘텐츠, <br /> 방송 영화, 해외시리즈까지! <br />
        재미를 플레이해보세요.
      </p>
      <p className={`${styles.text} intro`}>
        간편하게 가입하고, 원하실 때 해지할 수 있어요.
      </p>
      <TaingButton />
    </div>
  );
};

export default Intro;
