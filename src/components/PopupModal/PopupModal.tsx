import { useEffect } from 'react';
import styles from './PopupModal.module.scss';
import { hasDayPassed } from '@/utils/hasDayPassed';
import popupImage from '/src/assets/images/popup_image.png';

interface IPopupModalProps {
  closePopup: () => void;
}

const PopupModal = ({ closePopup }: IPopupModalProps) => {
  // 컴포넌트 마운트 시 팝업을 표시할지 말지 결정
  useEffect(() => {
    // localStorage에서 'hideForToday' 항목을 가져옴
    const hideForToday = localStorage.getItem('hideForToday');

    // 만약 'hideForToday' 값이 존재하고, 그 값에 저장된 시간으로부터 하루가 지나지 않았다면
    // 팝업을 닫는다.
    if (hideForToday && !hasDayPassed(hideForToday)) {
      closePopup();
    }
  }, []);

  // "오늘 하루 보지 않기" 버튼 클릭 핸들러
  const handleCloseForToday = () => {
    // 현재 시간을 ISO 형식으로 localStorage에 저장
    localStorage.setItem('hideForToday', new Date().toISOString());
    closePopup();
  };
  return (
    <div className={styles.PopupModal}>
      <img className={styles.popupImage} src={popupImage} alt="popupImage" />
      <div className={styles.buttonBox}>
        <button onClick={handleCloseForToday} type="button">
          오늘 하루 보지 않기
        </button>
        <button onClick={closePopup} type="button">
          닫기
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
