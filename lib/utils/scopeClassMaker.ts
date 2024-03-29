export const scopeClassMaker = (prefix: string) => (name?: string) =>
  `${prefix}${name ? `-${name}` : ""}`;
