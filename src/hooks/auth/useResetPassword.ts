import { sendPasswordResetEmail } from 'firebase/auth';
import { useCallback, useMemo, useState } from 'react';
import { auth } from './index';

export function useResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const resetPassword = useCallback(
    async (email: string) => {
      setIsLoading(true);
      try {
        await sendPasswordResetEmail(auth, email);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [setError],
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      resetPassword,
    }),
    [isLoading, error, resetPassword],
  );
}
