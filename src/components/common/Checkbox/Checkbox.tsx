import styles from './Checkbox.module.scss';
import { useState } from 'react';

interface ICheckboxProps {
  id: string;
  label: string;
}

const Checkbox = ({ id, label }: ICheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <li className={styles.checkList}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={toggleCheck}
      />
      <label htmlFor={id} className={`${isChecked && styles.checked}`}>
        <div className={styles.checkImage} />
        {label}
      </label>
    </li>
  );
};

export default Checkbox;
