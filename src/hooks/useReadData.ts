import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useCallback, useMemo, useState } from 'react';
import db from '../../firebase';
import { IImageData } from 'src/type';

export function useReadData(collectionKey: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const [data, setData] = useState<IImageData[]>([]);

  const readData = useCallback(
    async (documentKey?: string) => {
      setIsLoading(true);

      try {
        if (!documentKey) {
          const collectionRef = collection(db, collectionKey);
          const { docs } = await getDocs(collectionRef);

          const docsData = docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          setData(docsData);
        } else {
          const documentRef = doc(db, collectionKey, documentKey);
          const docSnapshot = await getDoc(documentRef);

          if (docSnapshot.exists()) {
            const docData: {
              id: string;
            }[] = [
              {
                id: docSnapshot.id,
                ...docSnapshot.data(),
              },
            ];

            setData(docData);
          }
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
    () => ({
      isLoading,
      error,
      data,
      readData,
    }),
    [readData, error, isLoading, data],
  );
}
