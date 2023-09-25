import { useRecoilState } from 'recoil';
import { passwordState, passwordErrorState } from '@/state/signUpState';
import Input from '@components/common/Input/Input';

const PasswordInput = () => {
  const [password, setPassword] = useRecoilState(passwordState);
  const [passwordError, setPasswordError] = useRecoilState(passwordErrorState);

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*]).{8,15}$/;
    if (!password.trim()) {
      return '입력한 내용이 없어요.';
    }
    if (!regex.test(password)) {
      return '영문, 숫자, 특수문자 (~!@#$%^&*) 조합 8~15자리로 입력해주세요.';
    }
    return null;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const validationMessage = validatePassword(newPassword);
    setPasswordError(validationMessage);
  };

  const handleInputBlur = () => {
    if (!password.trim()) {
      setPasswordError('입력한 내용이 없어요.');
    }
  };

  return (
    <Input
      type="password"
      placeholderText="비밀번호"
      value={password}
      errorMessage={passwordError}
      onChange={handlePasswordChange}
      onBlur={handleInputBlur}
    />
  );
};

export default PasswordInput;
