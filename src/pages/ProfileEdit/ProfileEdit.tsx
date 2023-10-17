import Button from '@components/common/Button/Button';
import styles from './ProfileEdit.module.scss';
import ProfileTitle from '@components/ProfileTitle/ProfileTitle';
import { useNavigate } from 'react-router';
import ProfileList from '@components/ProfileList/ProfileList';
import { useRecoilValue } from 'recoil';
import { profileState } from '@/state/profileState';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const onMoveProfile = () => navigate('/profile');
  const profileLists = useRecoilValue(profileState);

  return (
    <div className={styles.profile}>
      <ProfileTitle
        title="프로필 편집"
        paragraph="편집할 프로필을 선택해주세요"
      />
      <div>
        <div className={styles.profileContainer}>
          {profileLists.map((profile, index) => (
            <ProfileList
              page="profileEdit"
              id={profile.id}
              key={index}
              name={profile.name}
              image={profile.image}
            />
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
