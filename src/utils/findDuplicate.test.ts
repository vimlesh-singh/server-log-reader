import findDuplicate from './findDuplicate';

describe('function should return object with value and number of counts in an Array', () => {
  const array1: string[] = [
    'val',
    '/12',
    'val',
    '/12',
    'val',
    '/12',
    '/12',
    '/12',
    '/12',
    'val',
  ];
  test(`${array1} should return  array of objects with count of duplicate items in an array`, () => {
    expect(findDuplicate(array1)).toEqual([
      { name: '/12', count: 6 },
      { name: 'val', count: 4 },
    ]);
  });
});
