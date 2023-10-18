import Button from '@components/common/Button/Button';
import styles from './Profile.module.scss';
import ProfileTitle from '@components/ProfileTitle/ProfileTitle';
import { useNavigate } from 'react-router';
import ProfileList from '@components/ProfileList/ProfileList';
import { useEffect } from 'react';
import { useReadData } from '@/hooks/useReadData';
import { useAuthState } from '@/hooks/auth';
import { useRecoilState } from 'recoil';
import { profileState } from '@/state/profileState';
import { useUpdateData } from '@/hooks/firestore/useUpdateData';
import { IProfileData } from '@/type';
const Profile = () => {
  const { user } = useAuthState();
  const [profileLists, setProfileLists] = useRecoilState(profileState);
  const { readData, data } = useReadData('users');
  const userId = user?.uid || '';
  const { updateData } = useUpdateData(userId);
  const handleChangeProfile = (index: number) => {
    const updatedProfileLists = profileLists.map(profile => {
      return {
        ...profile,
        isActive: profile.id === index,
      };
    });
    setProfileLists(updatedProfileLists);
    const updatedData: IProfileData = {
      email: user?.email || '',
      profile: updatedProfileLists,
    };
    updateData(updatedData); // 수정된 데이터를 전달하여 업데이트
  };

  useEffect(() => {
    localStorage.setItem('profileLists', JSON.stringify(profileLists));
  }, [profileLists]);

  const navigate = useNavigate();
  const onMoveMain = () => {
    navigate('/');
  };

  useEffect(() => {
    readData(userId);
  }, [userId]);

  useEffect(() => {
    if (data && data[0] && data[0].profile) {
      setProfileLists(data[0].profile);
    } else {
      setProfileLists([]); // 또는 다른 적절한 초기값 설정
    }
  }, [data]);

  if (profileLists === undefined) {
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
              image={profile.image}
              id={profile.id}
              onClick={handleChangeProfile}
              isActive={profile.isActive}
              page={'profile'}
            />
          ))}
        </div>
      </div>
      <Button
        type="button"
        state="default"
        title="프로필 변경"
        onClick={onMoveMain}
      />
    </div>
  );
};
export default Profile;
