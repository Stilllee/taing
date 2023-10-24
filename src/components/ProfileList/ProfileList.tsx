import { IClassNames } from '@/type';
import styles from './ProfileList.module.scss';

interface IProfileList {
  image: string;
  name: string;
  page: 'profile' | 'profileEdit';
  id: number;
  isActive?: boolean;
  onClick?: (index: number) => void;
}

const ProfileList = ({
  name,
  image,
  page,
  id,
  isActive,
  onClick,
}: IProfileList) => {
  const classNames: IClassNames = {
    profileFirst: styles.profileFirst,
    profileSecond: styles.profileSecond,
    profileThird: styles.profileThird,
    profileFourth: styles.profileFourth,
  };

  return (
    <div>
      {page === 'profile' ? (
        <button
          aria-label={`${name}의 프로필`}
          onClick={() => onClick && onClick(id)}
          className={`${styles.profilePhoto} ${classNames[image]} ${
            isActive ? styles.active : ''
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
