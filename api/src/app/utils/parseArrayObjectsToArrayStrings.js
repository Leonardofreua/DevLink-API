export default function parseArrayObjectsToArrayStrings(arrayAsObject) {
  return arrayAsObject.map(({ label }) => label);
}
