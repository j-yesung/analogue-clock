import { useClock } from '../hooks/useClock';
import * as S from './Clock.styled';

type ClockNumberProps = { number: number; angle: number };

const ClockNumber = ({ number, angle }: ClockNumberProps) => {
  const { x, y } = useClock(angle);

  return (
    <S.ClockNumber x={x} y={y}>
      {number}
    </S.ClockNumber>
  );
};

export default ClockNumber;
