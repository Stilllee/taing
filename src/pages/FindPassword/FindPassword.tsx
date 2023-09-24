import styles from './FindPassword.module.scss';
import Input from '@components/common/Input/Input';
import Button from '@components/common/Button/Button';

const FindPassword = () => {
  return (
    <main className={styles.FindPassword}>
      <h1 className={styles.title}>비밀번호 찾기</h1>
      <form className={styles.findForm}>
        <p className={styles.findInfo}>
          이메일 확인 후 등록된 이메일 주소로 비밀번호 재설정을 위한 인증메일이
          발송됩니다. 이메일을 확인하여 12시간 이내에 비밀번호 재설정을
          완료해주세요.
        </p>
        <Input type={'email'} placeholderText={'이메일'} />
        <Button type={'submit'} title={'확인'} state={'active'} />
      </form>
    </main>
  );
};

export default FindPassword;
