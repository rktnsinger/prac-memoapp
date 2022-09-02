export function getCurrentTimeStamp() {
  const date = new Date();

  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
    .toISOString()
    .replace("T", " ")
    .slice(0, 19);
}
