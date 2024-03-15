import { useEffect, useState } from 'react';
import { setIsVisible } from '../redux/modules/clockSlice';
import { useDispatch } from 'react-redux';

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

  const handleMouseEnter = () => dispatch(setIsVisible(true));
  const handleMouseLeave = () => dispatch(setIsVisible(false));

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return { date, x, y, secondDegrees, minuteDegrees, hourDegrees, handleMouseEnter, handleMouseLeave };
};
