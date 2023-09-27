import { useState, useCallback } from 'react';
import Checkbox from '@components/common/Checkbox/Checkbox';
import styles from './CheckboxGroup.module.scss';

type CheckboxType = {
  id: string;
  label: string;
  additionalClass?: string;
};

interface CheckboxesGroupProps {
  checkboxes: CheckboxType[];
  onChange: (checkedItems: Record<string, boolean>) => void;
}

const PARENT_CHILD_RELATION: Record<string, string[]> = {
  agree6: ['subAgree1', 'subAgree2'],
};

export const CheckboxesGroup = ({
  checkboxes,
  onChange,
}: CheckboxesGroupProps) => {
  const initialChecks = checkboxes.reduce<Record<string, boolean>>(
    (acc, chk) => {
      acc[chk.id] = false;
      return acc;
    },
    {},
  );

  const [checkedItems, setCheckedItems] = useState(initialChecks);

  const handleAllCheckToggle = useCallback(() => {
    const shouldCheckAll = !checkboxes.every(chk => checkedItems[chk.id]);
    const newCheckedItems: Record<string, boolean> = {};

    checkboxes.forEach(chk => {
      newCheckedItems[chk.id] = shouldCheckAll;
    });

    setCheckedItems(newCheckedItems);
    onChange(newCheckedItems);
  }, [checkboxes, checkedItems, onChange]);

  const handleCheckboxChange = useCallback(
    (id: string) => {
      const newCheckedItems = {
        ...checkedItems,
        [id]: !checkedItems[id],
      };

      if (PARENT_CHILD_RELATION[id]) {
        PARENT_CHILD_RELATION[id].forEach(childId => {
          newCheckedItems[childId] = newCheckedItems[id];
        });
      } else {
        Object.keys(PARENT_CHILD_RELATION).forEach(parentId => {
          if (PARENT_CHILD_RELATION[parentId].includes(id)) {
            newCheckedItems[parentId] = PARENT_CHILD_RELATION[parentId].every(
              childId => newCheckedItems[childId],
            );
          }
        });
      }

      setCheckedItems(newCheckedItems);
      onChange(newCheckedItems);
    },
    [checkedItems, onChange],
  );

  const isAllChecked = checkboxes.every(chk => checkedItems[chk.id]);

  return (
    <div className={styles.agreeWrapper}>
      <ul className={styles.allAgree}>
        <Checkbox
          id="allAgree"
          label="모두 동의합니다."
          checked={isAllChecked}
          onChange={handleAllCheckToggle}
        />
      </ul>
      <ul className={styles.agreeBox}>
        {checkboxes.map(chk => (
          <Checkbox
            key={chk.id}
            id={chk.id}
            label={chk.label}
            additionalClass={chk.additionalClass}
            checked={checkedItems[chk.id] || false}
            onChange={() => handleCheckboxChange(chk.id)}
          />
        ))}
      </ul>
    </div>
  );
};
