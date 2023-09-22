import { useState } from 'react';
import { useSignUp } from '@/hooks/auth/useSignUp';
import { useCreateAuthUser } from '@/hooks/firestore/useCreateAuthUser';
import { useCustomNavigate } from '@/hooks/useCustomNavigate';
import Input from '@components/common/Input/Input';
import Checkbox from '@components/common/Checkbox/Checkbox';
import Button from '@components/common/Button/Button';
import styles from './SignUp.module.scss';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { navigateTo } = useCustomNavigate();

  const { signUp } = useSignUp(true);
  const { createAuthUser } = useCreateAuthUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    const userCredential = await signUp(email, password);
    if (userCredential && userCredential.user && userCredential.user.email) {
      const userAuth = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      };
      await createAuthUser(userAuth);
    }
    navigateTo('/login');
  };

  return (
    <main className={styles.SignUp}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>타잉 회원가입</h1>
        <h4 className={styles.info}>이메일로 간편하게 티빙을 시작하세요!</h4>
      </div>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <Input
            type={'email'}
            placeholderText={'이메일'}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type={'password'}
            placeholderText={'비밀번호'}
            hintMessage={'영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            type={'password'}
            placeholderText={'비밀번호 확인'}
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={styles.agreeWrapper}>
          <ul className={styles.allAgree}>
            <Checkbox id={'allAgree'} label={'모두 동의합니다.'} />
          </ul>
          <ul className={styles.agreeBox}>
            <Checkbox
              id={'agree1'}
              label={'만 14세 이상입니다.'}
              listType={'agreeList'}
            />
            <Checkbox
              id={'agree2'}
              label={'[필수] 서비스 이용약관 동의'}
              listType={'agreeList'}
            />
            <Checkbox
              id={'agree3'}
              label={'[필수] 개인전보 수집 및 서비스 활용 동의'}
              listType={'agreeList'}
            />
            <Checkbox
              id={'agree4'}
              label={'[필수] 채널 홈페이지 개인정보 제 3자 제공동의'}
              listType={'agreeList'}
            />
            <Checkbox
              id={'agree5'}
              label={'[선택] 개인정보 제 3자 제공동의'}
              listType={'agreeList'}
            />
            <Checkbox
              id={'agree6'}
              label={'[선택] 개인정보 수집 및 서비스 활용 동의'}
              listType={'agreeList'}
            />
            <Checkbox
              id={'subAgree1'}
              label={'[선택] 마케팅 정보 SMS 수신동의'}
              additionalClass={styles.subAgree}
              listType={'agreeList'}
            />
            <Checkbox
              id={'subAgree2'}
              label={'[선택] 마케팅 정보 이메일 수신동의'}
              additionalClass={styles.subAgree}
              listType={'agreeList'}
            />
          </ul>
        </div>
        <Button type={'submit'} state={'default'} title={'가입하기'} />
      </form>
    </main>
  );
};
export default SignUp;
