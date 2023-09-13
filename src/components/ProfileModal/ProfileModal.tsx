import Modal from '@components/common/Modal/Modal';
import styles from './ProfileModal.module.scss';
import LogoutModal from '@components/LogoutModal/LogoutModal';
import { useState } from 'react';
interface IProfileModal {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  show: boolean;
}
const ProfileModal = ({ onMouseEnter, onMouseLeave, show }: IProfileModal) => {
  const profileClass = `${styles.profileModal} ${show ? '' : styles.hidden}`;

  const [logoutVisible, setLogoutVisible] = useState(false);
  const closeLogout = () => setLogoutVisible(false);
  const openLogout = () => setLogoutVisible(true);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={profileClass}
    >
      <div className={styles.profileTab}>
        <div className={styles.profileImage} />
        <div className={styles.profile}>
          <span className={styles.name}>닉네임</span>
          <button>
            프로필 전환
            <span className={styles.arrowIcon} />
          </button>
        </div>
      </div>
      <ul className={styles.profileMenu}>
        <li>
          <button>MY</button>
        </li>
        <li>
          <button>이용권</button>
        </li>
        <li>
          <button>쿠폰등록</button>
        </li>
        <li>
          <button>고객센터</button>
        </li>
        <li>
          <button onClick={openLogout} className={styles.logoutBtn}>
            로그아웃
          </button>
        </li>
      </ul>
      {logoutVisible && (
        <Modal>
          <LogoutModal closeLogout={closeLogout} />
        </Modal>
      )}
    </div>
  );
};

export default ProfileModal;
