import { useEffect, useState } from 'react';
import * as S from './Clock.styled';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const secondsRatio = date.getSeconds() / 60;
  const minutesRatio = (secondsRatio + date.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + date.getHours()) / 12;

  const secondDegrees = secondsRatio * 360;
  const minuteDegrees = minutesRatio * 360;
  const hourDegrees = hoursRatio * 360;

  return (
    <S.ClockWrapper>
      <S.HourHand style={{ transform: `rotate(${hourDegrees}deg)` }}></S.HourHand>
      <S.MinuteHand style={{ transform: `rotate(${minuteDegrees}deg)` }}></S.MinuteHand>
      <S.SecondHand style={{ transform: `rotate(${secondDegrees}deg)` }}></S.SecondHand>
    </S.ClockWrapper>
  );
};

export default Clock;
