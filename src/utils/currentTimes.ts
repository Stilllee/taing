export function currentTimes() {
  function formattedDate(date: number) {
    return String(date).padStart(2, '0');
  }
  const now = new Date();
  const year = now.getFullYear();
  const month = formattedDate(now.getMonth() + 1);
  const date = formattedDate(now.getDate());
  const minutes = formattedDate(now.getMinutes());
  const hours =
    now.getHours() > 12
      ? `오후 ${formattedDate(now.getHours() - 12)}`
      : `오전 ${formattedDate(now.getHours())}`;
  const nowTime = `${year}. ${month}. ${date} ${hours}:${minutes}`;

  return nowTime;
}
