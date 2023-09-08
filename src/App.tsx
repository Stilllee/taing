import styles from './App.module.scss';
import Header from '@components/header/Header';
import Footer from '@components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
