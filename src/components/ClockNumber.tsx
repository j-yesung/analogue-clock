import { useClock } from '../hooks/useClock';
import * as S from './Clock.styled';

interface ClockNumberProps {
  number: number;
  angle: number;
}

const ClockNumber = ({ number, angle }: ClockNumberProps) => {
  const { angleConvert } = useClock();
  const { x, y } = angleConvert(angle);

  return (
    <S.ClockNumberWrapper>
      <S.ClockNumber $x={x} $y={y}>
        {number}
      </S.ClockNumber>
    </S.ClockNumberWrapper>
  );
};

export default ClockNumber;
