import Checkbox from '@components/common/Checkbox/Checkbox';
import styles from './LogIn.module.scss';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useSignIn } from '@/hooks/auth/useSignIn';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, error, user, signIn } = useSignIn();

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onLogIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn(email, password);
  };
  return (
    <main className={styles.LogIn}>
      <h1 className={styles.title}>TAING 로그인</h1>
      <form className={styles.loginForm} onSubmit={onLogIn}>
        <Input
          type={'email'}
          placeholderText={'이메일'}
          value={email}
          onChange={onEmailChange}
        />
        <Input
          type={'password'}
          placeholderText={'비밀번호'}
          value={password}
          onChange={onPasswordChange}
        />
        <Checkbox id={'auto'} label={'자동로그인'} />
        <Button
          type={'submit'}
          title={`${isLoading ? '로그인 중...' : '로그인하기'}`}
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
