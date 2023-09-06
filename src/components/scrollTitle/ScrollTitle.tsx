import styles from './ScrollTitle.module.scss';

interface IScrollTitle {
  title: string;
  subtitle: string;
  paragraph: string;
}

const ScrollTitle = ({ title, subtitle, paragraph }: IScrollTitle) => {
  return (
    <div className={styles.scroll_title}>
      <h2>{title}</h2>
      <p className={styles.sub}>{subtitle}</p>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

export default ScrollTitle;
