export function getPostDate(dateStr) {
  if (!dateStr) return "Unknown Date";
  const parts = dateStr.split("/");
  if (parts.length !== 3) return "Invalid Date";
  const [day, month, year] = parts;
  const isoDateStr = `${year}-${month.padStart(2, "0")}-${day.padStart(
    2,
    "0"
  )}`;
  const formattedDate = new Date(isoDateStr);
  if (isNaN(formattedDate)) return "Invalid Date";
  return formattedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
