"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load_leaderboard = load_leaderboard;
exports.update_leaderboard = update_leaderboard;
var fs = require("fs");
var csv_parse_1 = require("csv-parse");
var csv_stringify_1 = require("csv-stringify");
function load_leaderboard(file) {
    fs.readFile(file, "utf8", function (err, data) {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        else {
            (0, csv_parse_1.parse)(data, { delimiter: ";", columns: true }, function (err, leaderboard) {
                if (err) {
                    console.error("Could not parse CSV; err");
                    return;
                }
                else {
                    console.log("Leaderboard: ", leaderboard);
                }
            });
        }
    });
}
//fs.readFile läser en fil
//utf8 gör så att file läses som text (inte rent binärt)
// (err, data) är en funktion som callas efter filen är läst där om det är error, loggas ett meddelande annars kommer datan bearbetas
function update_leaderboard(country_code, newName, newScore, country_name) {
    var file_path = "../PKDprojekt2025/leaderboards/".concat(country_code, ".csv");
    fs.readFile(file_path, "utf8", function (err, data) {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        (0, csv_parse_1.parse)(data, { delimiter: ";", columns: true, trim: true }, function (err, leaderboard) {
            if (err) {
                console.error("Could not parse CSV:", err);
                return;
            }
            // Add new entry
            leaderboard.push({ name: newName, score: newScore });
            // Convert leaderboard array back into CSV format
            (0, csv_stringify_1.stringify)(leaderboard, { header: true, delimiter: ";" }, function (err, output) {
                if (err) {
                    console.error("Error converting to CSV:", err);
                    return;
                }
                // Save updated CSV back to file
                fs.writeFile(file_path, output, "utf8", function (err) {
                    if (err) {
                        console.error("Error saving file into CSV:", err);
                        return;
                    }
                    sort_csv(leaderboard);
                    console.log("Leaderboard ".concat(country_name, ": "), leaderboard);
                });
            });
        });
    });
}
function sort_csv(leaderboard) {
    leaderboard.forEach(function (entry) { return entry.score = Number(entry.score); });
    for (var i = 0; i < leaderboard.length; i = i + 1) {
        var biggest_index = i;
        for (var j = i + 1; j < leaderboard.length; j = j + 1) {
            if (leaderboard[j].score > leaderboard[biggest_index].score) {
                biggest_index = j;
            }
        }
        var temp = leaderboard[i];
        leaderboard[i] = leaderboard[biggest_index];
        leaderboard[biggest_index] = temp;
    }
    return leaderboard.slice(0, 5); //slice tar bara element 0-5
}
