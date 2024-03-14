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

export const Hour = styled(ClockHand)`
  width: 6px;
  height: 50px;
`;

export const Minute = styled(ClockHand)`
  width: 4px;
  height: 70px;
`;

export const Second = styled(ClockHand)`
  width: 2px;
  height: 90px;
  background-color: red;
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
  /* left: ${props => props.x}px;
  top: ${props => props.y}px; */
  ${({ x, y }) => `transform: translate(${x}px, ${y}px);`}
`;
