export const getDate = (date: Date): string => {
  const today = new Date();

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month: string = monthNames[date.getMonth()];
  const day: string = isToday ? "Today" : `${month}. ${date.getDate()}`;
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const ampm: string = hours >= 12 ? "pm" : "am";

  const formattedTime: string = `${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;

  return `${day}, ${formattedTime}`;
};
