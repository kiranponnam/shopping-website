export const Calculate = (a: any, b: any) => {
  return Math.floor(a * b);
};
export const getTotalItems = (items: any) =>
  items.reduce((acc: any, item: any) => acc + item.amount, 0);
