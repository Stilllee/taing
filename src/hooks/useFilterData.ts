import { useEffect, useState } from 'react';
import { useReadData } from './useReadData';
import { IImageData } from 'src/type';

export default function useFilterData(page: 'onBoarding' | 'main') {
  const [filterData, setFilterData] = useState<IImageData[]>([]);
  const { readData, data, isLoading } = useReadData('images');

  useEffect(() => {
    readData();
  }, [readData]);

  useEffect(() => {
    function filterDataByPage(page: 'onBoarding' | 'main') {
      if (data) {
        const newData = data.filter(item => item[page]);
        setFilterData(newData);
      }
    }

    filterDataByPage(page);
  }, [data, page]);

  return [filterData, isLoading];
}
