import styles from './ProfileList.module.scss';

interface IProfileList {
  profile: ProfileType;
}
type ProfileType = { profileClassName: string; name: string };

const ProfileList = ({ profile }: IProfileList) => {
  return (
    <div>
      <button
        className={`${styles.profilePhoto} ${profile.profileClassName}`}
      />
      <p className={styles.profileName}>{profile.name}</p>
    </div>
  );
};

export default ProfileList;
