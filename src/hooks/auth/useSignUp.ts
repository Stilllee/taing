import { useState, useCallback, useMemo } from 'react';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification as firebaseSendEmailVerification,
  UserCredential,
  AuthError,
} from 'firebase/auth';
import { auth } from './index';

interface IUseSignUpReturn {
  isLoading: boolean;
  error: Error | null;
  user: UserCredential | null;
  signUp: (
    email: string,
    password: string,
    displayName?: string,
  ) => Promise<UserCredential | undefined>;
}

export function useSignUp(
  sendEmailVerification: boolean = false,
): IUseSignUpReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [user, setUser] = useState<UserCredential | null>(null);

  const signUp = useCallback(
    async (email: string, password: string, displayName?: string) => {
      setIsLoading(true);
      try {
        const userCredentials: UserCredential =
          await createUserWithEmailAndPassword(auth, email, password);

        if (displayName && userCredentials.user) {
          await updateProfile(userCredentials.user, { displayName });
        }

        if (sendEmailVerification && userCredentials.user) {
          await firebaseSendEmailVerification(userCredentials.user);
        }

        setUser(userCredentials);
        return userCredentials;
      } catch (error) {
        const firebaseError = error as AuthError;

        // 에러 코드가 'auth/email-already-in-use'일 경우, setError로 메세지 설정
        if (firebaseError.code === 'auth/email-already-in-use') {
          setError(new Error('이미 가입된 이메일 주소입니다.'));
        } else {
          setError(firebaseError); // Firebase에서 제공하는 다른 에러 설정
        }
      } finally {
        setIsLoading(false);
      }
    },
    [sendEmailVerification],
  );

  return useMemo(
    () => ({ isLoading, error, user, signUp }),
    [isLoading, error, user, signUp],
  );
}
