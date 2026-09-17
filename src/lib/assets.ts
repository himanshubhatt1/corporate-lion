export function asset(fileName: string) {
  return `/images/${fileName.split("/").map(encodeURIComponent).join("/")}`;
}
