"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Array_countries = exports.Tyskland = exports.Sweden = void 0;
var list_1 = require("../PKDprojekt2025/lib/list");
var Hints10_Sweden = ["This country had around 593 billion USD BNP last year"];
var Hints8_Sweden = ["Women could vote in this country 1919"];
var Hints6_Sweden = ["The largest lake in this country is called Vänern"];
var Hints4_Sweden = ["Zlatan Ibrahimovic was born in this country"];
var Hints2_Sweden = ["Stockholm is the capital of this country"];
exports.Sweden = {
    name: "Sweden",
    section1: [Hints10_Sweden, Hints8_Sweden, Hints6_Sweden, Hints4_Sweden, Hints2_Sweden],
    section2: [(0, list_1.pair)("fråga", "svar"), (0, list_1.pair)("fråga", "svar"), (0, list_1.pair)("fråga", "svar")],
    players: [(0, list_1.pair)("Albert", 0)],
    leaderboard: []
};
exports.Tyskland = {
    name: "Tyskland",
    section1: [[], [], [], []],
    section2: [(0, list_1.pair)("fråga", "svar"), (0, list_1.pair)("fråga", "svar"), (0, list_1.pair)("fråga", "svar")],
    players: [(0, list_1.pair)("Albert", 16), (0, list_1.pair)("Ida", 14), (0, list_1.pair)("axeL", 3)],
    leaderboard: ["Albert", "Ida", "axeL"]
};
exports.Array_countries = [exports.Sweden, exports.Tyskland];
