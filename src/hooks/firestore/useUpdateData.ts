import { doc, updateDoc } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import firebaseApp from '../../../firebase';
import { getFirestore } from 'firebase/firestore';
import { IProfileData } from '@/type';

const db = getFirestore(firebaseApp);

export function useUpdateData(documentKey: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const updateData = useCallback(
    async (data: IProfileData) => {
      const documentRef = doc(db, 'users', documentKey);

      setIsLoading(true);

      try {
        const profileStateToChange = {
          ...data,
          profile: data.profile,
        };

        await updateDoc(documentRef, profileStateToChange);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [documentKey],
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      updateData,
    }),
    [error, isLoading, updateData],
  );
}
