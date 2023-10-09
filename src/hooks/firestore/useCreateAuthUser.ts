import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import firebaseApp from '../../../firebase';
import { getFirestore } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

interface UserAuth {
  uid: string;
  email: string;
  displayName?: string;
}

interface IUseCreateAuthUserReturn {
  isLoading: boolean;
  error: Error | null;
  createAuthUser: (
    userAuth: UserAuth,
    additionData?: Record<string, never>,
  ) => Promise<void>;
}

const profileLists = [
  {
    id: 1,
    profileClassName: `photoFirst`,
    name: '닉네임 1',
  },
  {
    id: 2,
    profileClassName: `photoSecond`,
    name: '닉네임 2',
  },
  {
    id: 3,
    profileClassName: `photoThird`,
    name: '닉네임 3',
  },
  {
    id: 4,
    profileClassName: `photoFourth`,
    name: '닉네임 4',
  },
];
export function useCreateAuthUser(
  collectionKey: string = 'users',
): IUseCreateAuthUserReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const createAuthUser = useCallback(
    async (userAuth: UserAuth, additionData: Record<string, never> = {}) => {
      const userDocRef = doc(db, collectionKey, userAuth.uid);

      setIsLoading(true);

      try {
        const userSnapshot = await getDoc(userDocRef);
        if (!userSnapshot.exists()) {
          const { email, displayName } = userAuth;
          const createAt = serverTimestamp();

          const userToSave = {
            email,
            createAt,
            profile: profileLists,
            ...additionData,
            ...(displayName ? { displayName } : {}),
          };

          await setDoc(userDocRef, userToSave);
        } else {
          throw new ReferenceError(
            '이미 Firestore에 가입 등록된 사용자입니다.',
          );
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [collectionKey],
  );

  return useMemo(
    () => ({ isLoading, error, createAuthUser }),
    [createAuthUser, error, isLoading],
  );
}
