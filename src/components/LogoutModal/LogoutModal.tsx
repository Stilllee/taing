import styles from './LogoutModal.module.scss';

interface ILogoutModalProps {
  closeLogout: () => void;
}

const LogoutModal = ({ closeLogout }: ILogoutModalProps) => {
  return (
    <div className={styles.LogoutModal}>
      <p>로그아웃 하시겠습니까?</p>
      <div className={styles.buttonBox}>
        <button onClick={closeLogout} type="button">
          확인
        </button>
        <button onClick={closeLogout} type="button">
          취소
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
