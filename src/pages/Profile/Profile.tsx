import Button from '@components/common/Button/Button';
import styles from './Profile.module.scss';
import ProfileTitle from '@components/ProfileTitle/ProfileTitle';
import { useNavigate } from 'react-router';
import ProfileList from '@components/ProfileList/ProfileList';
import { useEffect, useState } from 'react';
import { useReadData } from '@/hooks/useReadData';
import { useAuthState } from '@/hooks/auth';
import { useRecoilState } from 'recoil';
import { profileState } from '@/state/profileState';
const Profile = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(4);
  const { user } = useAuthState();
  const [profileLists, setProfileLists] = useRecoilState(profileState);
  const { readData, data } = useReadData('users');
  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
  };
  const navigate = useNavigate();
  const onMoveEdit = () => {
    navigate('/profile-edit');
  };

  useEffect(() => {
    readData(user?.uid);

    if (data && data[0] && data[0].profile) {
      setProfileLists(data[0].profile);
    } else {
      setProfileLists([]); // 또는 다른 적절한 초기값 설정
    }
  }, [user]);

  useEffect(() => {
    console.log(data[0]);
  },[data])

  if (profileLists === undefined) {
    // 데이터가 로딩 중인 동안 표시할 로딩 상태 또는 메시지를 추가할 수 있습니다.
    return <div>Loading...</div>;
  }

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
