import Button from '@components/common/Button/Button';
import styles from './ProfileEdit.module.scss';
import ProfileTitle from '@components/ProfileTitle/ProfileTitle';
import { useNavigate } from 'react-router';
import ProfileList from '@components/ProfileList/ProfileList';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const onMoveProfile = () => navigate('/profile');
  const profileLists = [
    {
      profileClassName: `photoFirst`,
      name: '닉네임 1',
    },
    {
      profileClassName: `photoSecond`,
      name: '닉네임 2',
    },
    {
      profileClassName: `photoThird`,
      name: '닉네임 3',
    },
    {
      profileClassName: `photoFourth`,
      name: '닉네임 4',
    },
  ];

  return (
    <div className={styles.profile}>
      <ProfileTitle
        title="프로필 편집"
        paragraph="편집할 프로필을 선택해주세요"
      />
      <div>
        <div className={styles.profileContainer}>
          {profileLists.map((profile, index) => (
            <ProfileList key={index} profile={profile} />
          ))}
        </div>
      </div>
      <Button
        type="button"
        state="active"
        title="완료"
        onClick={onMoveProfile}
      />
    </div>
  );
};
export default ProfileEdit;
