const customDateFormats = (date) => {
  return {
    short: date.toLocaleDateString("hu-hu", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    long: date.toLocaleDateString("hu-hu", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  };
};

export default customDateFormats;
