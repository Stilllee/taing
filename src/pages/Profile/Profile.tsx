import Button from '@components/common/Button/Button';
import styles from './Profile.module.scss';
import ProfileTitle from '@components/ProfileTitle/ProfileTitle';
import { useNavigate } from 'react-router';
const Profile = () => {
  const navigate = useNavigate();
  const onMoveEdit = () => {
    navigate('/profile-edit');
  };
  return (
    <div className={styles.profile}>
      <ProfileTitle
        title="프로필 선택"
        paragraph="시청할 프로필을 선택해주세요"
      />
      <div>
        <div className={styles.profileContainer}>
          <div>
            <div className={`${styles.profilePhoto} ${styles.photoFirst}`} />
            <span className={styles.profileName}>닉네임</span>
          </div>
          <div>
            <div className={`${styles.profilePhoto} ${styles.photoSecond}`} />
            <span className={styles.profileName}>닉네임</span>
          </div>
          <div>
            <div className={`${styles.profilePhoto} ${styles.photoThird}`} />
            <span className={styles.profileName}>닉네임</span>
          </div>
          <div>
            <div className={`${styles.profilePhoto} ${styles.photoFourth}`} />
            <span className={styles.profileName}>닉네임</span>
          </div>
        </div>
      </div>
      <Button
        type="button"
        state="default"
        title="프로필편집"
        onClick={onMoveEdit}
      />
    </div>
  );
};
export default Profile;
