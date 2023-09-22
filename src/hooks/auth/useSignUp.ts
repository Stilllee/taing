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
        setError(error as AuthError);
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
