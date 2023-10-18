// 하루가 지났는지 확인하는 함수
export const hasDayPassed = (dateString: string) => {
  const currentTime = new Date().getTime();
  const time = new Date(dateString).getTime();
  return currentTime - time >= ONE_DAY_IN_MILLISECONDS;
};

const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
