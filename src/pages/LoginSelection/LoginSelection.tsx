import Loader from '@/components/Loader/Loader';
import useFilterData from '../../hooks/useFilterData';
import styles from './LoginSelection.module.scss';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from '@/hooks/auth';
import { useEffect } from 'react';
import { useCustomNavigate } from '@/hooks/useCustomNavigate';
import useRedirect from '@/hooks/useRedirect';

const LoginSelection = () => {
  const { filterData, isLoading } = useFilterData('onBoarding');
  const { signInWithGoogle, user } = useSignInWithGoogle();
  const { navigateTo } = useCustomNavigate();
  const { userLoggedInCheck, user: loggedInUser } = useRedirect();

  useEffect(() => {
    userLoggedInCheck();
  }, [loggedInUser]);

  const logInWithGoogle = () => {
    signInWithGoogle();
  };
  useEffect(() => {
    if (user) navigateTo('/', true);
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <main className={styles.LoginSelection}>
      <div className={styles.background}>
        <img src={filterData[0]?.onBoarding?.background} alt="배경이미지" />
        <div className={styles.shadow} />
      </div>
      <div className={styles.title}>
        <p>반가워요!</p>
        <p>계정을 선택해주세요.</p>
      </div>
      <div className={styles.buttonBox}>
        <button
          className={styles.startTaing}
          onClick={() => navigateTo('/login')}
          type={'button'}
        >
          TAING으로 시작하기
        </button>
        <button
          className={styles.startGoogle}
          type={'button'}
          onClick={logInWithGoogle}
        >
          구글로 시작하기
        </button>
      </div>
      <div className={styles.findIdBox}>
        <span className={styles.findIdInfo}>계정을 잊으셨나요?</span>
        <Link to={'/find-id'}>계정 찾기</Link>
      </div>
    </main>
  );
};
export default LoginSelection;
