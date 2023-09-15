import styles from './ProfileTitle.module.scss';

interface IProfileTitle {
  title: string;
  paragraph: string;
}
const ProfileTitle = ({ title, paragraph }: IProfileTitle) => {
  return (
    <div className={styles.profileTitle}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default ProfileTitle;
