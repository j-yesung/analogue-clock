import { useClock } from '../hooks/useClock';
import * as S from './Clock.styled';

const ClockHands = () => {
  const { hourDegrees, minuteDegrees, secondDegrees } = useClock(0);

  return (
    <section>
      <S.Hour hour={hourDegrees} />
      <S.Minute minute={minuteDegrees} />
      <S.Second second={secondDegrees} />
    </section>
  );
};

export default ClockHands;
