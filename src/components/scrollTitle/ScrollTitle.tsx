import styles from './ScrollTitle.module.scss';

interface IScrollTitle {
  title: string;
  subtitle: string;
  paragraph: string;
}

const ScrollTitle = ({ title, subtitle, paragraph }: IScrollTitle) => {
  return (
    <div className={styles.scroll_title}>
      <h2 className="intro">{title}</h2>
      <p className={`${styles.sub} intro`}>{subtitle}</p>
      <p className={`${styles.paragraph} intro`}>{paragraph}</p>
    </div>
  );
};

export default ScrollTitle;
