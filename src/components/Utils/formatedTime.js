export default function formatTime(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h > 0 ? `${h}Hour ` : ""}${m > 0 ? `${m}Min` : ""}`.trim();
}
