import { useDispatch } from 'react-redux';
import { setTooltipPosition } from '../redux/modules/clockSlice';

interface TooltipPosition {
  clientX: number;
  clientY: number;
}

export const useTooltip = () => {
  const dispatch = useDispatch();

  const handleMouseMove = (e: TooltipPosition) => {
    dispatch(setTooltipPosition({ x: e.clientX, y: e.clientY }));
  };

  return { handleMouseMove };
};
