import { useSelector } from 'react-redux';
import * as S from './Clock.styled';
import { RootState } from '../redux/store/store';
import { useDate } from '../hooks/useDate';

const ClockToolTip = () => {
  const { date } = useDate();
  const tooltipPosition = useSelector((state: RootState) => state.clockSlice.tooltipPosition);
  const isVisible = useSelector((state: RootState) => state.clockSlice.isVisible);

  return (
    <S.Tooltip $isVisible={isVisible} $x={tooltipPosition.x} $y={tooltipPosition.y}>
      <div>{date.toLocaleTimeString()}</div>
    </S.Tooltip>
  );
};

export default ClockToolTip;
