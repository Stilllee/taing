import { useState, useEffect, useMemo } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from './index';
import { useCustomNavigate } from '../useCustomNavigate';

export function useAuthState() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const { navigateTo } = useCustomNavigate();

  useEffect(() => {
    setIsLoading(true);
    return onAuthStateChanged(
      auth,
      currentUser => {
        if (currentUser) {
          setUser(currentUser);
          setIsLoading(false);
        } else {
          navigateTo('/onboarding');
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
