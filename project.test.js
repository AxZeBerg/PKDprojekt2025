"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Around_the_world_1 = require("../PKDprojekt2025/Around_the_world");
var Around_the_world_2 = require("../PKDprojekt2025/Around_the_world");
test("should shuffle array but keep the same elements", function () {
    var arr = [1, 2, 3, 4, 5];
    var shuffled = (0, Around_the_world_1.shuffleArray)(__spreadArray([], arr, true));
    expect(shuffled.sort()).toEqual(arr.sort());
});
// getRandomInt.test.ts
describe('getRandomInt', function () {
    test('returns an integer between 0 (inclusive) and max (exclusive)', function () {
        var max = 10;
        for (var i = 0; i < 100; i++) {
            var result = (0, Around_the_world_2.getRandomInt)(max);
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThan(max);
            expect(Number.isInteger(result)).toBe(true);
        }
    });
    test('returns 0 when max is 0', function () {
        expect((0, Around_the_world_2.getRandomInt)(0)).toBe(0);
    });
});
