import styled from 'styled-components';

export const ClockWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

export const ClockHand = styled.div`
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  background-color: black;
`;

export const HourHand = styled(ClockHand)`
  width: 6px;
  height: 50px;
`;

export const MinuteHand = styled(ClockHand)`
  width: 4px;
  height: 70px;
`;

export const SecondHand = styled(ClockHand)`
  width: 2px;
  height: 90px;
  background-color: red;
`;
