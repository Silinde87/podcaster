export const secondsToHHMMSS = (seconds: string) => {
  const date = new Date(0);
  date.setSeconds(Number(seconds));
  return date.toISOString().substring(11, 19);
};
