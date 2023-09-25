import { useRecoilState } from 'recoil';
import {
  passwordState,
  confirmPasswordState,
  confirmPasswordErrorState,
} from '@/state/signUpState';
import Input from '@components/common/Input/Input';

const ConfirmPasswordInput = () => {
  const [password] = useRecoilState(passwordState);
  const [confirmPassword, setConfirmPassword] =
    useRecoilState(confirmPasswordState);
  const [confirmPasswordError, setConfirmPasswordError] = useRecoilState(
    confirmPasswordErrorState,
  );

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    if (newConfirmPassword !== password) {
      setConfirmPasswordError('일치하지 않습니다. 다시 입력해주세요.');
    } else {
      setConfirmPasswordError(null);
    }
  };

  const handleInputBlur = () => {
    if (!confirmPassword.trim()) {
      setConfirmPasswordError('입력한 내용이 없어요.');
    }
  };

  return (
    <Input
      type="password"
      placeholderText="비밀번호 확인"
      value={confirmPassword}
      errorMessage={confirmPasswordError}
      onChange={handleConfirmPasswordChange}
      onBlur={handleInputBlur}
    />
  );
};

export default ConfirmPasswordInput;
