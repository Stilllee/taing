import React, { useState } from 'react';
import styles from './Input.module.scss';

interface IInputProps {
  placeholderText: string;
  hintMessage?: string;
}

const Input: React.FC<IInputProps> = ({ placeholderText, hintMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          type="text"
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
      </div>
      <div className={styles.hint}>{hintMessage}</div>
    </>
  );
};
export default Input;
