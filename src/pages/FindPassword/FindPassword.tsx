import styles from './FindPassword.module.scss';
import Input from '@components/common/Input/Input';
import Button from '@components/common/Button/Button';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useResetPassword } from '@/hooks/auth';

const FindPassword = () => {
  const { isLoading, error, resetPassword } = useResetPassword();
  const [email, setEmail] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(true);

  const onFindPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetPassword(email);
    if (error?.message) {
      setIsEmailExist(false);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    email.length > 0 ? setIsSubmitEnabled(true) : setIsSubmitEnabled(false);
  }, [email]);

  return (
    <main className={styles.FindPassword}>
      <h1 className={styles.title}>비밀번호 찾기</h1>
      <form className={styles.findForm} onSubmit={onFindPassword}>
        <p className={styles.findInfo}>
          이메일 확인 후 등록된 이메일 주소로 비밀번호 재설정을 위한 인증메일이
          발송됩니다. 이메일을 확인하여 12시간 이내에 비밀번호 재설정을
          완료해주세요.
        </p>
        <Input
          type={'email'}
          placeholderText={'이메일'}
          value={email}
          onChange={onInputChange}
          errorMessage={isEmailExist ? '' : '이메일이 존재하지 않습니다.'}
        />
        <Button
          type={'submit'}
          title={isLoading ? 'loading..' : '확인'}
          state={'active'}
          disabled={!isSubmitEnabled}
        />
      </form>
    </main>
  );
};

export default FindPassword;
