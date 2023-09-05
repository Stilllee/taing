import Header from '@components/header/Header';
import Footer from '@components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
