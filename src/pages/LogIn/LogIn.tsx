import Checkbox from '@components/common/Checkbox/Checkbox';
import styles from './LogIn.module.scss';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSignIn } from '@/hooks/auth/useSignIn';

const ERROR_MESSAGES = {
  LOGIN_FAILED: '일치하는 회원정보가 없습니다',
  WRONG_PASSWORD: '비밀번호가 일치하지 않습니다',
};

const BUTTON_TITLES = {
  LOGIN: '로그인하기',
  LOADING: '로그인 중...',
};
const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const { isLoading, error, user, signIn } = useSignIn();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { type, value } = e.target;
    if (type === 'email') {
      setEmail(value);
    } else if (type === 'password') {
      setPassword(value);
    }
    setErrorMessage('');
  };

  const checkChange = () => {
    setIsChecked(current => !current);
  };
  const onLogIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn(email, password);
  };
  useEffect(() => {
    if (error?.message.includes('wrong-password')) {
      setErrorMessage(ERROR_MESSAGES.WRONG_PASSWORD);
    } else if (error?.message.includes('user-not-found')) {
      setErrorMessage(ERROR_MESSAGES.LOGIN_FAILED);
    }
  }, [error]);

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  return (
    <main className={styles.LogIn}>
      <h1 className={styles.title}>TAING 로그인</h1>
      <form className={styles.loginForm} onSubmit={onLogIn}>
        <Input
          type={'email'}
          placeholderText={'이메일'}
          value={email}
          onChange={handleInputChange}
        />
        <Input
          type={'password'}
          placeholderText={'비밀번호'}
          value={password}
          onChange={handleInputChange}
          errorMessage={errorMessage && errorMessage}
        />
        <Checkbox
          id={'auto'}
          label={'자동로그인'}
          checked={isChecked}
          onChange={checkChange}
        />
        <Button
          type={'submit'}
          title={isLoading ? BUTTON_TITLES.LOADING : BUTTON_TITLES.LOGIN}
          state={'login'}
        />
      </form>
      <div className={styles.pageLink}>
        <div className={styles.findBox}>
          <Link to={'/find-id'}>
            <span>계정 찾기</span>
          </Link>
          <Link to={'/find-password'}>비밀번호 찾기</Link>
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
