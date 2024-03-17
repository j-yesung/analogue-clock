import * as S from './Clock.styled';
import { useDate } from '../hooks/useDate';

const ClockHands = () => {
  const { hourDegrees, minuteDegrees, secondDegrees } = useDate();

  return (
    <section>
      <S.Hour $hour={hourDegrees} />
      <S.Minute $minute={minuteDegrees} />
      <S.Second $second={secondDegrees} />
    </section>
  );
};

export default ClockHands;
