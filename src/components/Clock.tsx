import * as S from './Clock.styled';
import ClockHands from './ClockHands';
import ClockNumber from './ClockNumber';

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Clock = () => {
  return (
    <S.ClockWrapper>
      {NUMBERS.map(number => (
        <ClockNumber key={number} number={number} angle={number * 30} />
      ))}
      <ClockHands />
    </S.ClockWrapper>
  );
};

export default Clock;
