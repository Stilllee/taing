import Loader from '@/components/Loader/Loader';
import useFilterData from '../../hooks/useFilterData';
import styles from './LoginSelection.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const LoginSelection = () => {
  const { filterData, isLoading } = useFilterData('onBoarding');
  const navigate = useNavigate();

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
        <Link to={'/find-id'}>아이디 찾기</Link>
      </div>
    </main>
  );
};
export default LoginSelection;
