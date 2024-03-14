import styled from 'styled-components';

export const ClockWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
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

export const Hour = styled(ClockHand)<{ hour: number }>`
  width: 6px;
  height: 50px;
  ${({ hour }) => `transform: rotate(${hour}deg);`}
`;

export const Minute = styled(ClockHand)<{ minute: number }>`
  width: 4px;
  height: 70px;
  ${({ minute }) => `transform: rotate(${minute}deg);`}
`;

export const Second = styled(ClockHand)<{ second: number }>`
  width: 2px;
  height: 90px;
  background-color: red;
  ${({ second }) => `transform: rotate(${second}deg);`}
`;

export const ClockNumberWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClockNumber = styled.span<{ x: number; y: number }>`
  position: absolute;
  font-size: 18px;
  transform-origin: center;
  transform: translate(-50%, -50%);
  user-select: none;
  ${({ x, y }) => `transform: translate(${x}px, ${y}px);`}
`;
