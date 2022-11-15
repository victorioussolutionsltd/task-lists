import { ListItemType } from '../types';

export function not(a: readonly ListItemType[], b: readonly ListItemType[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}
export function intersection(
  a: readonly ListItemType[],
  b: readonly ListItemType[]
) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
export function union(a: readonly ListItemType[], b: readonly ListItemType[]) {
  return [...a, ...not(b, a)];
}

export const numberOfChecked = (
  checked: readonly ListItemType[],
  items: readonly ListItemType[]
) => intersection(checked, items).length;
