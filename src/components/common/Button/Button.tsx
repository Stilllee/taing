import styles from './Button.module.scss';

interface IButton {
  title: string;
  type: 'submit' | 'button';
  state: 'login' | 'active' | 'default';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ title, state, type, disabled, onClick }: IButton) => {
  const classNames = {
    login: styles.login,
    active: styles.active,
    default: styles.default,
    submit: styles.submit,
    button: styles.button,
  };

  return (
    <>
      {type === 'submit' && (
        <button
          className={`${classNames[state]} ${classNames[type]} ${
            disabled ? styles.default : ''
          }`}
          type={type}
          disabled={disabled}
        >
          {title}
        </button>
      )}
      {type === 'button' && (
        <button
          className={`${classNames[state]} ${classNames[type]} ${
            disabled ? styles.default : ''
          }`}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
