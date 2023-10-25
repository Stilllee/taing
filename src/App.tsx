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
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
