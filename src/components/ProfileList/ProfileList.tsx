import styles from './ProfileList.module.scss';

interface IProfileList {
  photo: string;
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
  photo,
  page,
  id,
  active,
  onClick,
}: IProfileList) => {
  const classNames: IProfileClassNames = {
    photoFirst: styles.photoFirst,
    photoSecond: styles.photoSecond,
    photoThird: styles.photoThird,
    photoFourth: styles.photoFourth,
  };

  return (
    <div>
      {page === 'profile' ? (
        <button
          onClick={() => onClick && onClick(id)}
          className={`${styles.profilePhoto} ${classNames[photo]} ${
            id === active ? styles.active : ''
          }`}
        />
      ) : (
        <button className={`${styles.profilePhotoEdit} ${classNames[photo]}`} />
      )}
      <p className={styles.profileName}>{name}</p>
    </div>
  );
};

export default ProfileList;
