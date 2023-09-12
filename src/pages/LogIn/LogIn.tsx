import Checkbox from '@components/common/Checkbox/Checkbox';
import styles from './LogIn.module.scss';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <main className={styles.LogIn}>
      <h1 className={styles.title}>TAING ID 로그인</h1>
      <form className={styles.loginForm}>
        <Input type={'text'} placeholderText={'아이디'} />
        <Input type={'password'} placeholderText={'비밀번호'} />
        <Checkbox id={'auto'} label={'자동로그인'} />
        <Button type={'submit'} title={'로그인하기'} state={'login'} />
      </form>
      <div className={styles.pageLink}>
        <div className={styles.findBox}>
          <Link to={'/find-id'}>
            <span>아이디 찾기</span>
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
