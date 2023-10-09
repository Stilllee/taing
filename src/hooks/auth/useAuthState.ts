import { useState, useEffect, useMemo } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from './index';

export function useAuthState() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setIsLoading(true);
    return onAuthStateChanged(
      auth,
      currentUser => {
        if (currentUser) {
          setUser(currentUser);
          setIsLoading(false);
        }
      },
      error => {
        setError(error);
        setIsLoading(false);
      },
    );
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
    }),
    [isLoading, error, user],
  );
}
