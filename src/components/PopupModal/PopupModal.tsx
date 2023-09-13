import styles from './PopupModal.module.scss';

interface IPopupModalProps {
  closePopup: () => void;
}

const PopupModal = ({ closePopup }: IPopupModalProps) => {
  return (
    <div className={styles.PopupModal}>
      <img
        className={styles.popupImage}
        src="/src/assets/images/popup_image.png"
        alt="popupImage"
      />
      <div className={styles.buttonBox}>
        <button onClick={closePopup} type="button">
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
