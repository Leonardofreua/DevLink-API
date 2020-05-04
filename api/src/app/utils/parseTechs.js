export function parseArrayObjectsToString(arrayAsObject) {
  return arrayAsObject.map(({ label }) => label);
}

export function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(tech => tech.trim());
}
