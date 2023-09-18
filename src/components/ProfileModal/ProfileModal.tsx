import Modal from '@components/common/Modal/Modal';
import styles from './ProfileModal.module.scss';
import LogoutModal from '@components/LogoutModal/LogoutModal';
import { useState } from 'react';
import { useNavigate } from 'react-router';
interface IProfileModal {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  show: boolean;
}
const ProfileModal = ({ onMouseEnter, onMouseLeave, show }: IProfileModal) => {
  const navigate = useNavigate();
  const [logoutVisible, setLogoutVisible] = useState(false);
  const profileClass = `${styles.profileModal} ${show ? '' : styles.hidden}`;
  const closeLogout = () => setLogoutVisible(false);
  const openLogout = () => setLogoutVisible(true);
  const onMoveProfile = () => {
    onMouseLeave();
    navigate('/profile');
  };

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
          <button onClick={onMoveProfile}>
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
          <LogoutModal
            closeLogout={closeLogout}
            closeProfileModal={onMouseLeave}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProfileModal;
