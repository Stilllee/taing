import styles from './Checkbox.module.scss';
import { useState } from 'react';

interface ICheckboxProps {
  id: string;
  label: string;
  additionalClass?: string;
  listType?: string;
  checked?: boolean;
  onChange?: () => void;
}

const Checkbox = ({
  id,
  label,
  additionalClass,
  listType,
  checked = false,
  onChange,
}: ICheckboxProps) => {
  return (
    <li
      className={`${styles.checkList} ${additionalClass} ${
        listType === 'agreeList' ? styles.agreeList : ''
      }`}
    >
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className={`${checked && styles.checked}`}>
        <div className={styles.checkImage} />
        {label}
      </label>
    </li>
  );
};

export default Checkbox;
