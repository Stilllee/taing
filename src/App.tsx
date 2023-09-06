import Footer from '@components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
