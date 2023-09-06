import styles from './OnBoarding.module.scss';
import TaingButton from '@components/taingButton/TaingButton';

const OnBoarding = () => {
  return (
    <main>
      <div className={styles.scroll_section_1}>
        <p className={styles.title}>
          티빙 오리지널 콘텐츠, <br /> 방송 영화, 해외시리즈까지! <br />
          재미를 플레이해보세요.
        </p>
        <p className={styles.text}>
          간편하게 가입하고, 원하실 때 해지할 수 있어요.
        </p>
        <TaingButton />
      </div>
      <div className={styles.scroll_section_2}></div>
      <div className={styles.scroll_section_3}></div>
      <div className={styles.message}>
        <div className={styles.message_logo} />
        <p className={styles.message_title}>지금 시작해보세요</p>
        <TaingButton />
      </div>
    </main>
  );
};

export default OnBoarding;
