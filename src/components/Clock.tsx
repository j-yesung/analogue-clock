import { useEffect, useState } from 'react';
import * as S from './Clock.styled';
import ClockNumber from './ClockNumber';

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
