import {add} from 'add';
import {describe, expect, it} from 'vitest';

describe('Add', () => {
  it('should add 5 and 9 and get 14', () => {
    expect(add(5, 9)).toBe(14)
  });
});
