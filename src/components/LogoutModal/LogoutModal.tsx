import styles from './LogoutModal.module.scss';

interface ILogoutModalProps {
  closeLogout: () => void;
  closeProfileModal: () => void;
}

const LogoutModal = ({ closeLogout, closeProfileModal }: ILogoutModalProps) => {
  const closeLogoutModal = () => {
    closeProfileModal();
    closeLogout();
  };
  return (
    <div className={styles.LogoutModal}>
      <p>로그아웃 하시겠습니까?</p>
      <div className={styles.buttonBox}>
        <button onClick={closeLogoutModal} type="button">
          확인
        </button>
        <button onClick={closeLogoutModal} type="button">
          취소
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
