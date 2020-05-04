export function parseArrayObjectsToString(arrayAsObject) {
  return arrayAsObject.map(({ label }) => label);
}
