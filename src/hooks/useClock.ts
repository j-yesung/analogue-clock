import { useCallback } from 'react';
import { setIsVisible } from '../redux/modules/clockSlice';
import { useDispatch } from 'react-redux';

export const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const RADIUS = 170;

export const useClock = () => {
  const dispatch = useDispatch();

  const angleConvert = (angle: number) => {
    const radian = (angle * Math.PI) / 180;
    const x = RADIUS * Math.sin(radian);
    const y = -RADIUS * Math.cos(radian);

    return { x, y };
  };

  const handleMouseEnter = useCallback(() => {
    dispatch(setIsVisible(true));
  }, [dispatch]);

  const handleMouseLeave = useCallback(() => {
    dispatch(setIsVisible(false));
  }, [dispatch]);

  return { angleConvert, handleMouseEnter, handleMouseLeave };
};
