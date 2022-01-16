export function formatDate(date: Date): string {
  const formattedDate = date.toISOString().substring(0, 10);
  return formattedDate;
}
