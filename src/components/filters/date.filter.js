export default function dateFilter(value, format = "date") {
  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric"
  };

  if (format.includes("time")) {
    options.hour = options.minute = options.second = "2-digit";
  }

  return new Intl.DateTimeFormat("ru-RU", options).format(value);
}
