import styles from './Home.module.scss';
import Input from '../../components/common/Input/Input';

const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>홈이여유</h1>
      <Input placeholderText="password" type="password" />
    </div>
  );
};
export default Home;
