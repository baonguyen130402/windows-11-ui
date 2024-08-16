export function getDateTime() {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "numeric",
  });

  return { currentDate, currentTime };
}
