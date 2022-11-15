import { not, intersection, union, numberOfChecked } from './intersection';

describe('Array Helpers', () => {
  const listA = [{value: 1, description: "hello"},{value: 2, description: "hello"}] ;
  const listB = [{value: 1, description: "test"},{value: 2, description: "test"}] ;
  
  test('returns elements not belonging to second array', () => {
    expect(not(listA, listB)).toStrictEqual([{"description": "hello", "value": 1}, {"description": "hello", "value": 2}]);
    expect(not(listA, listA)).toStrictEqual([]);
  });

  test('returns intersection of two arrays', () => {
    expect(intersection(listA, listB)).toStrictEqual([]);
    expect(intersection(listA, listA)).toStrictEqual([{value: 1, description: "hello"},{value: 2, description: "hello"}]);
  })

  test('returns union of two arrays', () => {
    expect(union(listA, listB)).toStrictEqual([{value: 1, description: "hello"},{value: 2, description: "hello"}, {value: 1, description: "test"},{value: 2, description: "test"}]);
    expect(union(listA, listA)).toStrictEqual([{value: 1, description: "hello"},{value: 2, description: "hello"}]);
  })

  test('returns number of checked items of two arrays', () => {
    expect(numberOfChecked(listA, listB)).toBe(0);
    expect(numberOfChecked(listA, listA)).toBe(2);
  })
  
});
