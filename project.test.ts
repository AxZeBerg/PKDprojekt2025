import {
    shuffleArray
    } from "../PKDprojekt2025/Around_the_world";
    
import { getRandomInt }
     from "../PKDprojekt2025/Around_the_world";

    test("should shuffle array but keep the same elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray([...arr]);
    expect(shuffled.sort()).toEqual(arr.sort());
    });


// getRandomInt.test.ts


describe('getRandomInt', () => {
  test('returns an integer between 0 (inclusive) and max (exclusive)', () => {
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(max);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  test('returns 0 when max is 0', () => {
    expect(getRandomInt(0)).toBe(0);
  });
});
