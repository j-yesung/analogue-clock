import { useCallback } from 'react';
import { setIsVisible } from '../redux/modules/clockSlice';
import { useDispatch } from 'react-redux';

export const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const useClock = (angle: number) => {
  const dispatch = useDispatch();

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

  return { x, y, handleMouseEnter, handleMouseLeave };
};
