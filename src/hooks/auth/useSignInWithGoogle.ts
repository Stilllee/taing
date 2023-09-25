import { useState, useCallback } from 'react';
import {
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './index';

export function useSignInWithGoogle() {
  const [error, setError] = useState<null | Error>(null);
  const [user, setUser] = useState<null | UserCredential>(null);

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = useCallback(async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result);
    } catch (error) {
      setError(error as Error);
    }
  }, []);

  return {
    error,
    user,
    signInWithGoogle,
  };
}
