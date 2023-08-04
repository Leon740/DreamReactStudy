export default function fnSanitizeString(string) {
  return string ? string.trim().toLowerCase() : '';
}
