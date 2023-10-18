import { useEffect, useState } from 'react';
import { useSignUp } from '@/hooks/auth/useSignUp';
import { useCreateAuthUser } from '@/hooks/firestore/useCreateAuthUser';
import { useCustomNavigate } from '@/hooks/useCustomNavigate';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  emailState,
  emailErrorState,
  passwordState,
  passwordErrorState,
  confirmPasswordState,
  confirmPasswordErrorState,
} from '@/state/signUpState';

import Button from '@components/common/Button/Button';
import styles from './SignUp.module.scss';
import EmailInput from '@/components/EmailInput/EmailInput';
import PasswordInput from '@/components/PasswordInput/PasswordInput';
import ConfirmPasswordInput from '@/components/ConfirmPasswordInput/ConfirmPasswordInput';
import { CheckboxesGroup } from '@/components/CheckboxGroup/CheckbocGroup';
import useRedirect from '@/hooks/useRedirect';

type CheckedItemsType = { [key: string]: boolean };

const SignUp = () => {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [confirmPassword, setConfirmPassword] =
    useRecoilState(confirmPasswordState);
  const emailError = useRecoilValue(emailErrorState);
  const passwordError = useRecoilValue(passwordErrorState);
  const [confirmPasswordError, setConfirmPasswordError] = useRecoilState(
    confirmPasswordErrorState,
  );

  const checkboxes = [
    { id: 'agree1', label: '만 14세 이상입니다.' },
    {
      id: 'agree2',
      label: '[필수] 서비스 이용약관 동의',
    },
    {
      id: 'agree3',
      label: '[필수] 개인전보 수집 및 서비스 활용 동의',
    },
    {
      id: 'agree4',
      label: '[필수] 채널 홈페이지 개인정보 제 3자 제공동의',
    },
    {
      id: 'agree5',
      label: '[선택] 개인정보 제 3자 제공동의',
    },
    {
      id: 'agree6',
      label: '[선택] 개인정보 수집 및 서비스 활용 동의',
    },
    {
      id: 'subAgree1',
      label: '[선택] 마케팅 정보 SMS 수신동의',
      additionalClass: styles.subAgree,
    },
    {
      id: 'subAgree2',
      label: '[선택] 마케팅 정보 이메일 수신동의',
      additionalClass: styles.subAgree,
    },
  ];

  const handleCheckedItemsChange = (updatedCheckedItems: CheckedItemsType) => {
    setCheckedItems(updatedCheckedItems);
  };

  const { signUp: registerUser, error } = useSignUp(true);

  // 체크박스 초기 상태 설정
  const initialChecks = checkboxes.reduce((acc: CheckedItemsType, chk) => {
    acc[chk.id] = false;
    return acc;
  }, {});

  const [checkedItems, setCheckedItems] =
    useState<CheckedItemsType>(initialChecks);

  // '가입하기' 버튼의 disabled 속성을 결정하는 함수
  const isSubmitDisabled = () => {
    const areRequiredChecks = checkboxes
      .filter(
        chk =>
          chk.label.startsWith('[필수]') || chk.label === '만 14세 이상입니다.',
      )
      .every(chk => checkedItems[chk.id]);

    return (
      !areRequiredChecks ||
      Boolean(emailError) ||
      Boolean(passwordError) ||
      Boolean(confirmPasswordError)
    );
  };

  const { navigateTo } = useCustomNavigate();

  const { createAuthUser } = useCreateAuthUser();

  useEffect(() => {
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        setConfirmPasswordError('일치하지 않습니다. 다시 입력해주세요.');
      } else {
        setConfirmPasswordError(null);
      }
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (error) {
      alert(error.message);
      navigateTo('/login');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userCredential = await registerUser(email, password);
    if (userCredential && userCredential.user && userCredential.user.email) {
      const userAuth = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      };
      await createAuthUser(userAuth);
      navigateTo('/login', true);

      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <main className={styles.SignUp}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>타잉 회원가입</h1>
        <h4 className={styles.info}>이메일로 간편하게 티빙을 시작하세요!</h4>
      </div>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <EmailInput />
          <PasswordInput />
          <ConfirmPasswordInput />
        </div>
        <CheckboxesGroup
          checkboxes={checkboxes}
          onChange={handleCheckedItemsChange}
        />
        <Button
          type={'submit'}
          state={'login'}
          title={'가입하기'}
          disabled={isSubmitDisabled()}
        />
      </form>
    </main>
  );
};
export default SignUp;
