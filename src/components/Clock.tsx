import { useClock } from '../hooks/useClock';
import { useTooltip } from '../hooks/useTooltip';
import * as S from './Clock.styled';
import ClockHands from './ClockHands';
import ClockNumber from './ClockNumber';
import ClockToolTip from './ClockTooltip';

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Clock = () => {
  const { handleMouseEnter, handleMouseLeave } = useClock(0);
  const { handleMouseMove } = useTooltip();

  return (
    <>
      <S.ClockWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
        {NUMBERS.map(number => (
          <ClockNumber key={number} number={number} angle={number * 30} />
        ))}
        <ClockHands />
      </S.ClockWrapper>
      <ClockToolTip />
    </>
  );
};

export default Clock;
