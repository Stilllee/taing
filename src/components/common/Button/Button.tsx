import styles from './Button.module.scss';

interface IButton {
  title: string;
  type: 'submit' | 'button';
  state: 'login' | 'active' | 'default';
  onClick?: () => void;
}

const Button = ({ title, state, type, onClick }: IButton) => {
  const classNames = {
    login: styles.login,
    default: styles.default,
    active: styles.active,
    submit: styles.submit,
    button: styles.button,
  };

  return (
    <>
      {type === 'submit' && (
        <button
          className={`${classNames[state]} ${classNames[type]}`}
          type={type}
        >
          {title}
        </button>
      )}
      {type === 'button' && (
        <button
          className={`${classNames[state]} ${classNames[type]}`}
          type={type}
          onClick={onClick}
        >
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
