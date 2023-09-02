import React, { useState } from 'react';
import styles from './Input.module.scss';

interface IInputProps {
  placeholderText: string;
  hintMessage?: string;
  errorMessage?: string;
  type: 'text' | 'password' | 'email';
}

const Input: React.FC<IInputProps> = ({
  placeholderText,
  hintMessage,
  errorMessage,
  type,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const inputType =
    type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type;

  return (
    <>
      <div
        className={`${styles.inputWrapper} ${
          type === 'password' ? styles.passwordType : ''
        }`}
      >
        <input
          type={inputType}
          placeholder={placeholderText}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        {inputValue && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={() => setInputValue('')}
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
      <div className={styles.hint}>{errorMessage || hintMessage}</div>
    </>
  );
};
export default Input;
