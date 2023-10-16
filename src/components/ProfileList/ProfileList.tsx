import styles from './ProfileList.module.scss';

interface IProfileList {
  image: string;
  name: string;
  page: 'profile' | 'profileEdit';
  id: number;
  active?: number;
  onClick?: (index: number) => void;
}
interface IProfileClassNames {
  [key: string]: string;
}

const ProfileList = ({
  name,
  image,
  page,
  id,
  active,
  onClick,
}: IProfileList) => {
  const classNames: IProfileClassNames = {
    profileFirst: styles.profileFirst,
    profileSecond: styles.profileSecond,
    profileThird: styles.profileThird,
    profileFourth: styles.profileFourth,
  };

  return (
    <div>
      {page === 'profile' ? (
        <button
          onClick={() => onClick && onClick(id)}
          className={`${styles.profilePhoto} ${classNames[image]} ${
            id === active ? styles.active : ''
          }`}
        />
      ) : (
        <button className={`${styles.profilePhotoEdit} ${classNames[image]}`} />
      )}
      <p className={styles.profileName}>{name}</p>
    </div>
  );
};

export default ProfileList;
