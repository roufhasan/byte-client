export const formatDateTime = (timestamp) => {
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "short",
  };

  const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(
    new Date(timestamp)
  );

  const [time, date] = formattedDateTime.split(", ");

  return `${date}, ${time}`;
};
