import { useState } from 'react';
import styles from './Home.module.scss';
import Modal from '@components/common/Modal/Modal';
import PopupModal from '@components/PopupModal/PopupModal';
import LogoutModal from '@components/LogoutModal/LogoutModal';

const Home = () => {
  const [popupVisible, setPopupVisible] = useState(true);
  const [logoutVisible, setLogoutVisible] = useState(false);

  const closePopup = () => setPopupVisible(false);
  const closeLogout = () => setLogoutVisible(false);
  const openLogout = () => setLogoutVisible(true);

  return (
    <div>
      <h1 className={styles.title}>홈이여유</h1>
      <button onClick={openLogout} className={styles.btn}>
        로그아웃 임시버튼
      </button>
      {popupVisible && (
        <Modal>
          <PopupModal closePopup={closePopup} />
        </Modal>
      )}
      {logoutVisible && (
        <Modal>
          <LogoutModal closeLogout={closeLogout} />
        </Modal>
      )}
    </div>
  );
};
export default Home;
