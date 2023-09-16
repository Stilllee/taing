import Button from '@components/common/Button/Button';
import styles from './Profile.module.scss';
import ProfileTitle from '@components/ProfileTitle/ProfileTitle';
import { useNavigate } from 'react-router';
import { useState } from 'react';
const Profile = () => {
  const navigate = useNavigate();
  const [activeButtonIndex, setActiveButtonIndex] = useState(3);
  const onMoveEdit = () => {
    navigate('/profile-edit');
  };

  const profileList = [
    {
      profileClassName: `${styles.profilePhoto} ${styles.photoFirst}`,
      name: '닉네임 1',
    },
    {
      profileClassName: `${styles.profilePhoto} ${styles.photoSecond}`,
      name: '닉네임 2',
    },
    {
      profileClassName: `${styles.profilePhoto} ${styles.photoThird}`,
      name: '닉네임 3',
    },
    {
      profileClassName: `${styles.profilePhoto} ${styles.photoFourth}`,
      name: '닉네임 4',
    },
  ];

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
  };

  return (
    <div className={styles.profile}>
      <ProfileTitle
        title="프로필 선택"
        paragraph="시청할 프로필을 선택해주세요"
      />
      <div>
        <div className={styles.profileContainer}>
          {profileList.map((profile, index) => (
            <div key={index}>
              <button
                onClick={() => handleButtonClick(index)}
                className={`${profile.profileClassName} ${
                  index === activeButtonIndex ? styles.active : ' '
                }`}
              />
              <p className={styles.profileName}>{profile.name}</p>
            </div>
          ))}
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
