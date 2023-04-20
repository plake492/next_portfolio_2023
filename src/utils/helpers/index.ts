export const isEven = (num: number | string): boolean => {
  const number = typeof num === 'string' ? parseInt(num) : num;

  return number % 2 === 0;
};
