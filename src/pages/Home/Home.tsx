import { useState } from 'react';
import styles from './Home.module.scss';
import Modal from '@components/common/Modal/Modal';
import PopupModal from '@components/PopupModal/PopupModal';

const Home = () => {
  const [popupVisible, setPopupVisible] = useState(true);

  const closePopup = () => setPopupVisible(false);

  return (
    <div>
      <h1 className={styles.title}>홈이여유</h1>
      {popupVisible && (
        <Modal>
          <PopupModal closePopup={closePopup} />
        </Modal>
      )}
    </div>
  );
};
export default Home;
