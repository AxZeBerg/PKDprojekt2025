"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Array_countries = exports.New_Zealand = exports.Germany = exports.Sweden = void 0;
var list_1 = require("../PKDprojekt2025/lib/list");
var questions_hints_1 = require("../PKDprojekt2025/questions_hints");
exports.Sweden = {
    name: "Sweden",
    section1: [questions_hints_1.Hints10_Sweden, questions_hints_1.Hints8_Sweden, questions_hints_1.Hints6_Sweden, questions_hints_1.Hints4_Sweden, questions_hints_1.Hints2_Sweden],
    section2: questions_hints_1.Questions_Sweden,
    players: [(0, list_1.pair)("Albert", 0)],
    leaderboard: []
};
exports.Germany = {
    name: "Germany",
    section1: [questions_hints_1.Hints10_Germany, questions_hints_1.Hints8_Germany, questions_hints_1.Hints6_Germany, questions_hints_1.Hints4_Germany, questions_hints_1.Hints2_Germany],
    section2: questions_hints_1.Questions_Germany,
    players: [(0, list_1.pair)("Albert", 16), (0, list_1.pair)("Ida", 14), (0, list_1.pair)("axeL", 3)],
    leaderboard: ["Albert", "Ida", "axeL"]
};
exports.New_Zealand = {
    name: "New Zealand",
    section1: [questions_hints_1.Hints10_NewZealand, questions_hints_1.Hints8_NewZealand, questions_hints_1.Hints6_NewZealand, questions_hints_1.Hints4_NewZealand, questions_hints_1.Hints2_NewZealand],
    section2: questions_hints_1.Questions_NewZealand,
    players: [(0, list_1.pair)("Albert", 16), (0, list_1.pair)("Ida", 14), (0, list_1.pair)("axeL", 3)],
    leaderboard: ["Albert", "Ida", "axeL"]
};
exports.Array_countries = [exports.Sweden, exports.Germany];
