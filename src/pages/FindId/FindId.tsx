import Input from '@components/common/Input/Input';
import styles from './FindId.module.scss';
import Button from '@components/common/Button/Button';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSignIn } from '@/hooks/auth';
import useRedirect from '@/hooks/useRedirect';

const ERROR_MESSAGES = {
  EMAIL_NOT_FOUND: '일치하는 결과를 찾을 수 없습니다',
  EMAIL_FOUND: '해당 이메일로 로그인이 가능 합니다',
};

const FindId = () => {
  const { signIn: emailCheck, error, isLoading } = useSignIn();
  const [errorMessage, setErrorMessage] = useState('');
  const [hintMessage, setHintMessage] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [email, setEmail] = useState('');
  const { userLoggedInCheck, user } = useRedirect();

  useEffect(() => {
    userLoggedInCheck();
  }, [user]);
  const onFindEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailCheck(email, '1'); //이메일 존재 여부 확인
  };
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setErrorMessage('');
    setHintMessage('');
    setIsSubmitEnabled(newEmail.length > 0);
  };

  useEffect(() => {
    if (error?.message.includes('wrong-password')) {
      setHintMessage(ERROR_MESSAGES.EMAIL_FOUND);
    } else if (error?.message.includes('user-not-found')) {
      setErrorMessage(ERROR_MESSAGES.EMAIL_NOT_FOUND);
    }
  }, [error]);

  return (
    <main className={styles.FindId}>
      <h1 className={styles.title}>계정 찾기</h1>
      <div className={styles.FindWrapper}>
        <form className={styles.emailBox} onSubmit={onFindEmail}>
          <h2>이메일로 찾기</h2>
          <p>가입 시 등록한 이메일을 입력해주세요.</p>
          <Input
            type={'email'}
            placeholderText={'이메일'}
            value={email}
            onChange={onEmailChange}
            hintMessage={hintMessage && hintMessage}
            errorMessage={errorMessage && errorMessage}
          />
          <Button
            type={'submit'}
            title={isLoading ? 'loadig..' : '확인'}
            state={'active'}
            disabled={!isSubmitEnabled}
          />
        </form>
        <div className={styles.boundary}>
          <p>또는</p>
        </div>
        <div className={styles.findSelf}>
          <h2>본인인증으로 찾기</h2>
          <p>이미 본인인증이 완료된 계정에 한하여 아이디 찾기가 가능합니다.</p>
          <Button type={'button'} title={'본인인증하기'} state={'active'} />
        </div>
      </div>
    </main>
  );
};

export default FindId;
