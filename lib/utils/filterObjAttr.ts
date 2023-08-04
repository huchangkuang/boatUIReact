const isValidObj = (obj: unknown): boolean =>
  !!(obj instanceof Object && obj && Object.entries(obj));
export const filterObjAttr = (
  obj: Record<string, any>,
  deep = false,
): Record<string, any> =>
  isValidObj(obj)
    ? Object.fromEntries(
        Object.entries(obj).reduce(
          (arr: [string, any][], [k, v]) =>
            v !== undefined
              ? [...arr, [k, deep && isValidObj(v) ? filterObjAttr(v) : v]]
              : arr,
          [],
        ),
      )
    : {};
