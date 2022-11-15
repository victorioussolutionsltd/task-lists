import { not } from './intersection';

test('adds 1 + 2 to equal 3', () => {
  expect(not(1, 2)).toBe(true);
});
