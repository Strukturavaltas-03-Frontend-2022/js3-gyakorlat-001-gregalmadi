const HU = {
  date(date) {
    return new Intl.DateTimeFormat("hu-HU").format(date);
  },
  currency(value) {
    return new Intl.NumberFormat("hu-HU", {
      style: "currency",
      currency: "HUF",
    }).format(value);
  },
  list(strArr) {
    const lastElement = strArr.pop();
    return strArr.join(", ").concat(` és ${lastElement}`);
  },
};

export default HU;
