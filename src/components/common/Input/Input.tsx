import { useState } from 'react';
import styles from './Input.module.scss';

interface IInputProps {
  placeholderText: string;
  hintMessage?: string;
  errorMessage?: string | null;
  type: 'text' | 'password' | 'email';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  placeholderText,
  hintMessage,
  errorMessage,
  type,
  value,
  onChange,
  onBlur,
}: IInputProps) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const inputType =
    type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type;

  const clearInputValue = () => {
    const event = {
      target: {
        value: '',
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(event);
  };

  return (
    <div>
      <div
        className={`${styles.inputWrapper} ${
          type === 'password' ? styles.passwordType : ''
        }`}
      >
        <input
          type={inputType}
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {value && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={clearInputValue}
            aria-label="입력 내용 지우기"
          ></button>
        )}
        {type === 'password' && (
          <button
            type="button"
            className={`${styles.toogleButton} ${
              isPasswordVisible && styles.show
            }`}
            onClick={handlePasswordVisibilityToggle}
            aria-label="비밀번호 보이기/숨기기"
          ></button>
        )}
      </div>
      <div className={`${styles.hint} ${errorMessage ? styles.error : ''}`}>
        {errorMessage || hintMessage}
      </div>
    </div>
  );
};
export default Input;
