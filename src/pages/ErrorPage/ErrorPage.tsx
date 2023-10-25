import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import styles from './ErrorPage.module.scss';
import IconSVG from '@/assets/images/attention_icon.svg';
import { useCustomNavigate } from '@/hooks/useCustomNavigate';
import MetaTag from '@/components/MetaTag/MetaTag';

const ErrorPage = () => {
  const { navigateTo } = useCustomNavigate();
  const metaData = {
    title: '에러 페이지',
    description: '타잉의 에러 페이지 입니다',
  };
  return (
    <>
      <MetaTag title={metaData.title} description={metaData.description} />
      <Header />
      <main className={styles.ErrorPage}>
        <section className={styles.contentWrapper}>
          <img src={IconSVG} alt="알림 아이콘" width="200" height="200" />
          <div className={styles.textWrapper}>
            <h1>이런! 현재 해당 페이지를 찾을 수 없습니다.</h1>
            <p>하지만 타잉에는 더 많은 타잉만의 오리지날 콘텐츠와</p>
            <p>실시간채널, TV프로그램, 영화 콘텐츠가 준비되어 있습니다.</p>
            <p>타잉에서 더 많은 콘텐츠를 즐겨보세요!</p>
          </div>
          <button
            onClick={() => navigateTo('/', true)}
            className={styles.homeButton}
          >
            타잉 홈으로 가기
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default ErrorPage;
