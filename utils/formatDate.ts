import { format, fromUnixTime } from "date-fns";

export const formatDate = (timestamp: number) => {
  const date = fromUnixTime(timestamp/1000);

  return format(date, "MMMM d, yyyy HH:mm");
};
