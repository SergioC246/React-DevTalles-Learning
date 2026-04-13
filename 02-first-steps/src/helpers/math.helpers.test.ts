import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add', () => {
  test('should add two positives numbers', () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // !3. Assert

    expect(result).toBe(a + b);
  });
});

describe('subtract', () => {
  test('should subtract two positives numbers', () => {
    const a = 2;
    const b = 4;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
  test('should subtract two negatives numbers', () => {
    const a = -2;
    const b = -4;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {
  test('should multiply two positives numbers', () => {
    const a = 2;
    const b = 4;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
  test('should multiply two negatives numbers', () => {
    const a = -2;
    const b = -4;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});