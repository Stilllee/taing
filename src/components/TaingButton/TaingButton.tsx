import { Link } from 'react-router-dom';
import styles from './TaingButton.module.scss';
const TaingButton = () => {
  return (
    <Link to={'/login-selection'} className={`${styles.button} intro`}>
      <div className={styles.icon}></div>
      <p className={styles.title}>새로워진 타잉을 만나보세요!</p>
    </Link>
  );
};

export default TaingButton;
