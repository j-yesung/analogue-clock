export const useClock = (angle: number) => {
  const radius = 170;
  const radian = (angle * Math.PI) / 180;
  const x = radius * Math.sin(radian);
  const y = -radius * Math.cos(radian);

  return { x, y };
};
