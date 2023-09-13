import styles from './OnBoarding.module.scss';
import TaingButton from '@components/TaingButton/TaingButton';
import useFilterData, {
  filterDataByPage,
} from '../../../src/hooks/useFilterData';
import { IImageData } from 'src/type';
import { useEffect, useState } from 'react';
import ScrollSlider from '@components/ScrollSlider/ScrollSlider';
import AutoSlider from '@components/AutoSlider/AutoSlider';
import Intro from '@components/Intro/Intro';

const OnBoarding = () => {
  const { filterData, isLoading } = useFilterData('onBoarding');
  const [onlySwipeSmall, setOnlySwipeSmall] = useState<IImageData[]>([]);
  const [onlySwipeLarge, setOnlySwipeLarge] = useState<IImageData[]>([]);
  const [FindSwipe, setFindSwipe] = useState<IImageData[]>([]);

  useEffect(() => {
    setOnlySwipeSmall(filterDataByPage(filterData, 'onBoarding', 'small'));
    setOnlySwipeLarge(filterDataByPage(filterData, 'onBoarding', 'large'));
    setFindSwipe(filterDataByPage(filterData, 'onBoarding', 'medium'));
  }, [filterData]);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <main>
      <Intro background={filterData[0]?.onBoarding?.background} />
      <ScrollSlider
        onlySwipeSmall={onlySwipeSmall}
        onlySwipeLarge={onlySwipeLarge}
      />
      <AutoSlider findSwipe={FindSwipe} />
      <div className={styles.message}>
        <div className={styles.message_logo} />
        <p className={styles.message_title}>지금 시작해보세요</p>
        <TaingButton />
      </div>
    </main>
  );
};

export default OnBoarding;
