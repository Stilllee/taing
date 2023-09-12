import styles from './ProfileModal.module.scss';

const ProfileModal = () => {
  return (
    <div className={styles.profileModal}>
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
          <button className={styles.logoutBtn}>로그아웃</button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileModal;
