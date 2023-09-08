import styles from './OnBoarding.module.scss';
import TaingButton from '@components/taingButton/TaingButton';
import useFilterData, {
  filterDataByPage,
} from '../../../src/hooks/useFilterData';
import { IImageData } from 'src/type';
import { useEffect, useState } from 'react';
import ScrollSlider from '@components/scrollSlider/ScrollSlider';
import AutoSlider from '@components/autoSlider/AutoSlider';

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
      <div className={styles.scroll_section_1}>
        <img src={filterData[0]?.onBoarding?.background} />
        <p className={styles.title}>
          티빙 오리지널 콘텐츠, <br /> 방송 영화, 해외시리즈까지! <br />
          재미를 플레이해보세요.
        </p>
        <p className={styles.text}>
          간편하게 가입하고, 원하실 때 해지할 수 있어요.
        </p>
        <TaingButton />
      </div>
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
