import Button from '@components/common/Button/Button';
import styles from './Profile.module.scss';
import ProfileTitle from '@components/ProfileTitle/ProfileTitle';
import { useNavigate } from 'react-router';
import ProfileList from '@components/ProfileList/ProfileList';
import { useState } from 'react';
const Profile = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(4);
  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
  };
  const navigate = useNavigate();
  const onMoveEdit = () => {
    navigate('/profile-edit');
  };

  const profileLists = [
    {
      id: 1,
      profileClassName: `photoFirst`,
      name: '닉네임 1',
    },
    {
      id: 2,
      profileClassName: `photoSecond`,
      name: '닉네임 2',
    },
    {
      id: 3,
      profileClassName: `photoThird`,
      name: '닉네임 3',
    },
    {
      id: 4,
      profileClassName: `photoFourth`,
      name: '닉네임 4',
    },
  ];

  return (
    <div className={styles.profile}>
      <ProfileTitle
        title="프로필 선택"
        paragraph="시청할 프로필을 선택해주세요"
      />
      <div>
        <div className={styles.profileContainer}>
          {profileLists.map((profile, index) => (
            <ProfileList
              key={index}
              name={profile.name}
              photo={profile.profileClassName}
              id={profile.id}
              onClick={handleButtonClick}
              active={activeButtonIndex}
              page={'profile'}
            />
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
