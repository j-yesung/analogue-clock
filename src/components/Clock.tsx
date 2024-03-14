import * as S from './Clock.styled';
import ClockNumber from './ClockNumber';
import { useClock } from '../hooks/useClock';

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Clock = () => {
  const { hourDegrees, minuteDegrees, secondDegrees } = useClock(0);

  return (
    <>
      <S.ClockWrapper>
        <S.ClockNumberWrapper>
          {NUMBERS.map(number => (
            <ClockNumber key={number} number={number} angle={number * 30} />
          ))}
        </S.ClockNumberWrapper>
        <S.Hour style={{ transform: `rotate(${hourDegrees}deg)` }}></S.Hour>
        <S.Minute style={{ transform: `rotate(${minuteDegrees}deg)` }}></S.Minute>
        <S.Second style={{ transform: `rotate(${secondDegrees}deg)` }}></S.Second>
      </S.ClockWrapper>
    </>
  );
};

export default Clock;
