import styles from './LogIn.module.scss';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [autoLogin, setAutoLogin] = useState(false);

  const toggleAutoLogin = () => {
    setAutoLogin(prevState => !prevState);
  };

  const getAutoLoginButton = (): ReactNode => (
    <button
      className={styles.autoLoginWrapper}
      type="button"
      onClick={toggleAutoLogin}
      aria-label="Toggle Auto Login"
    >
      <div
        className={`${styles.autoLogin} ${
          autoLogin && styles.autoLoginChecked
        }`}
      />
      <span className={`${autoLogin && styles.labelChecked}`}>자동로그인</span>
    </button>
  );

  return (
    <main className={styles.LogIn}>
      <h1 className={styles.title}>TAING ID 로그인</h1>
      <form className={styles.loginForm}>
        <Input type={'text'} placeholderText={'아이디'} />
        <Input type={'password'} placeholderText={'비밀번호'} />
        {getAutoLoginButton()}
        <Button type={'submit'} title={'로그인하기'} state={'login'} />
      </form>
      <div className={styles.pageLink}>
        <div className={styles.findBox}>
          <Link to={'/findId'}>
            <span>아이디 찾기</span>
          </Link>
          <Link to={'/findPassword'}>비밀번호 찾기</Link>
        </div>
        <div className={styles.signupBox}>
          <span className={styles.signupInfo}>아직 계정이 없으신가요?</span>
          <Link to={'/signup'}>회원가입하기</Link>
        </div>
      </div>
    </main>
  );
};
export default LogIn;
