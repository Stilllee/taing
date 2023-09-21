import styles from './App.module.scss';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '@components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
