//function returns array of objects with name and count properties for each unique item in array
const findDuplicate = (array: string[]): { name: string; count: number }[] => {
  let temObj: any = {};
  array.forEach(val => {
    if (!temObj[val]) {
      temObj[val] = 1;
    } else {
      temObj[val]++;
    }
  });
  return Object.keys(temObj)
    .map(key => ({ name: key, count: temObj[key] }))
    .sort((a, b) => b.count - a.count);
};
export default findDuplicate;
