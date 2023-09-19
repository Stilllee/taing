import { IImageData } from 'src/type';
import { useEffect, useState } from 'react';
import { useReadData } from './useReadData';

export function filterDataByPage(
  data: IImageData[],
  page: 'onBoarding' | 'main',
  size?: string,
): IImageData[] {
  if (!data) return [];

  if (!size) {
    return data.filter(item => item[page]);
  } else {
    return data.filter(item => item[page]?.[size]);
  }
}

export default function useFilterData(
  page: 'onBoarding' | 'main',
  size?: string,
) {
  const [filterData, setFilterData] = useState<IImageData[]>([]);
  const { readData, data, isLoading } = useReadData('images');

  useEffect(() => {
    readData();
  }, [readData]);

  useEffect(() => {
    if (data) {
      const newData = filterDataByPage(data, page, size);
      setFilterData(newData);
    }
  }, [data, page, size]);

  return { filterData, isLoading, data };
}
