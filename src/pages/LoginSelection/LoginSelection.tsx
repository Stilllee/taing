import styles from './LoginSelection.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const LoginSelection = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.LoginSelection}>
      <div className={styles.title}>
        <p>반가워요!</p>
        <p>계정을 선택해주세요.</p>
      </div>
      <div className={styles.buttonBox}>
        <button
          className={styles.startTaing}
          onClick={() => navigate('/login')}
          type={'button'}
        >
          TAING ID로 시작하기
        </button>
        <button className={styles.startGoogle} type={'button'}>
          구글로 시작하기
        </button>
      </div>
      <div className={styles.findIdBox}>
        <span className={styles.findIdInfo}>아이디를 잊으셨나요?</span>
        <Link to={'/findId'}>아이디 찾기</Link>
      </div>
    </main>
  );
};
export default LoginSelection;
