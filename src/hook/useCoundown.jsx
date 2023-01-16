import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date("October 20, 2022").getTime();

  const [countDown, setCountDown] = useState(
    new Date().getTime() - countDownDate 
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(new Date().getTime() - countDownDate );
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));

  return [days, hours, minutes, seconds];
};

export { useCountdown };