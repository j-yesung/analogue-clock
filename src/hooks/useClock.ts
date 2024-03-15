import { useCallback, useEffect, useState } from 'react';
import { setIsVisible } from '../redux/modules/clockSlice';
import { useDispatch } from 'react-redux';

export const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const useClock = (angle: number) => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const secondsRatio = date.getSeconds() / 60;
  const minutesRatio = (secondsRatio + date.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + date.getHours()) / 12;

  const secondDegrees = secondsRatio * 360;
  const minuteDegrees = minutesRatio * 360;
  const hourDegrees = hoursRatio * 360;

  const radius = 170;
  const radian = (angle * Math.PI) / 180;
  const x = radius * Math.sin(radian);
  const y = -radius * Math.cos(radian);

  const handleMouseEnter = useCallback(() => {
    dispatch(setIsVisible(true));
  }, [dispatch]);

  const handleMouseLeave = useCallback(() => {
    dispatch(setIsVisible(false));
  }, [dispatch]);

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return { date, x, y, secondDegrees, minuteDegrees, hourDegrees, handleMouseEnter, handleMouseLeave };
};
