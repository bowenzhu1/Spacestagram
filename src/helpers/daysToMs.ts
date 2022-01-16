export function daysToMs(days: number): number {
  const hours = 24;
  const minutes = 60;
  const seconds = 60;
  const ms = 1000;
  return days * hours * minutes * seconds * ms;
}
