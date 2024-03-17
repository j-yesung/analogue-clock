import { useEffect, useState } from 'react';

export const useDate = () => {
  const [date, setDate] = useState(new Date());

  const secondsRatio = date.getSeconds() / 60;
  const minutesRatio = (secondsRatio + date.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + date.getHours()) / 12;

  const secondDegrees = secondsRatio * 360;
  const minuteDegrees = minutesRatio * 360;
  const hourDegrees = hoursRatio * 360;

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return { date, secondDegrees, minuteDegrees, hourDegrees };
};
