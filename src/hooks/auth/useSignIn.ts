import { useState, useCallback, useMemo } from 'react';
import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index';

export function useSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const [user, setUser] = useState<UserCredential | null>(null);

  const signIn = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      setUser(userCredentials);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
      signIn,
    }),
    [isLoading, error, user, signIn],
  );
}
