import { useRecoilState } from 'recoil';
import { emailState, emailErrorState } from '@/state/signUpState';
import Input from '@/components/common/Input/Input';

const EmailInput = () => {
  const [email, setEmail] = useRecoilState(emailState);
  const [emailError, setEmailError] = useRecoilState(emailErrorState);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(newEmail)) {
      setEmailError('올바른 이메일 양식을 사용하세요.');
    } else {
      setEmailError(null);
    }
  };

  const handleInputBlur = () => {
    if (!email.trim()) {
      setEmailError('입력한 내용이 없어요.');
    }
  };

  return (
    <Input
      type="email"
      placeholderText="이메일"
      value={email}
      errorMessage={emailError}
      onChange={handleEmailChange}
      onBlur={handleInputBlur}
    />
  );
};

export default EmailInput;
