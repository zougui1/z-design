export const isObject = (value: any): value is object => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return !!value && value.constructor === Object;
};
