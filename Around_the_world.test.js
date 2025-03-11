"use strict";
// game.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
var Around_the_world_1 = require("./Around_the_world"); // adjust the import path as needed
// countryQuestions.test.ts
// Optional: If shuffleArray, head, tail are imported, you can mock them like this:
// jest.mock('./utils', () => ({
//   shuffleArray: (arr: any[]) => arr, // return the array unchanged
//   head: (item: any) => item[0],
//   tail: (item: any) => item[1],
// }));
describe('country_questions', function () {
    var originalPrompt;
    var originalConsoleLog;
    beforeEach(function () {
        // Backup original implementations.
        originalPrompt = global.prompt;
        originalConsoleLog = console.log;
        // Mock prompt to simulate user input.
        global.prompt = jest.fn();
        // Optionally, mock console.log to silence or capture output.
        console.log = jest.fn();
        // Initialize the global variable (if it's not declared in module scope).
        global.player_points = 0;
    });
    afterEach(function () {
        // Restore the original functions.
        global.prompt = originalPrompt;
        console.log = originalConsoleLog;
    });
    it('awards bonus point when all answers are correct', function () {
        var generator = {
            section2: [
                ["What is the capital of France?", "paris"],
                ["What is the capital of Germany?", "berlin"],
                ["What is the capital of Italy?", "rome"]
            ]
        };
        // Simulate correct answers for all questions.
        global.prompt
            .mockReturnValueOnce("paris")
            .mockReturnValueOnce("berlin")
            .mockReturnValueOnce("rome");
        // Call the function.
        var result = (0, Around_the_world_1.country_questions)(generator);
        // Expect 3 correct answers plus a bonus point (total 4).
        expect(result).toBe(4);
    });
    it('does not award bonus when not all answers are correct', function () {
        var generator = {
            section2: [
                ["What is the capital of France?", "paris"],
                ["What is the capital of Germany?", "berlin"],
                ["What is the capital of Italy?", "rome"]
            ]
        };
        // Simulate one incorrect answer (second question).
        global.prompt
            .mockReturnValueOnce("paris")
            .mockReturnValueOnce("wrong")
            .mockReturnValueOnce("rome");
        // Call the function.
        var result = (0, Around_the_world_1.country_questions)(generator);
        // Only two answers are correct, so no bonus point; expect 2.
        expect(result).toBe(2);
    });
});
