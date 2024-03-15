import * as S from './Clock.styled';
import ClockNumber from './ClockNumber';
import { useClock } from '../hooks/useClock';

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Clock = () => {
  const { hourDegrees, minuteDegrees, secondDegrees } = useClock(0);

  return (
    <S.ClockWrapper>
      {NUMBERS.map(number => (
        <ClockNumber key={number} number={number} angle={number * 30} />
      ))}
      <S.Hour hour={hourDegrees} />
      <S.Minute minute={minuteDegrees} />
      <S.Second second={secondDegrees} />
    </S.ClockWrapper>
  );
};

export default Clock;
