import styles from './Button.module.scss';

interface IButton {
  title: string;
  type: 'login' | 'active' | 'default';
}

const Button = ({ title, type }: IButton) => {
  const classNames = {
    login: styles.login,
    default: styles.default,
    active: styles.active,
  };

  return <button className={classNames[type]}>{title}</button>;
};

export default Button;
