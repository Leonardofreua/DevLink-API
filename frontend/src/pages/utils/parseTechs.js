export function parseArrayObjectsToStringArray(arrayAsObject) {
  return arrayAsObject.map(({ label }) => label);
}
