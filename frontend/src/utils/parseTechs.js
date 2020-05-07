export function parseArrayObjectsToArrayString(arrayAsObject) {
  return arrayAsObject.map(({ label }) => label);
}
