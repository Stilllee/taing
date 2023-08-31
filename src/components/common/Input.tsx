import React, { useState } from 'react';
import styles from './Input.module.scss';

interface IInputProps {
  placeholderText: string;
  hintMessage?: string;
  type: 'text' | 'password' | 'email';
}

const Input: React.FC<IInputProps> = ({
  placeholderText,
  hintMessage,
  type,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showPW, setShowPW] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const toggleShowPW = () => {
    setShowPW(!showPW);
  };

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          type={type === 'password' && !showPW ? 'password' : 'text'}
          placeholder={placeholderText}
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue && (
          <div
            className={styles.clearButton}
            onClick={() => setInputValue('')}
          ></div>
        )}
        {type === 'password' && (
          <div
            className={
              showPW
                ? `${styles.toogleButton} ${styles.show}`
                : `${styles.toogleButton}`
            }
            onClick={toggleShowPW}
          ></div>
        )}
      </div>
      <div className={styles.hint}>{hintMessage}</div>
    </>
  );
};
export default Input;
