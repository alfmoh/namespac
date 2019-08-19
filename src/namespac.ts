export function namespac(namespaces: string): Object {
  const env: typeof global | typeof window = global || window;
  if (typeof namespaces !== "string") {
    throw new Error("Namespaces should be of the string type");
  }
  if (namespaces.length === 0) { throw new Error("Namespaces cannot be empty."); }
  return namespaces
    .trim()
    .split(".")
    .reduce(
      (lastObj, nextObj) => (lastObj[nextObj] = lastObj[nextObj] || {}),
      env
    );
}
