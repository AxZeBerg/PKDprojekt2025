
import *  as fs from "fs";

import { parse } from "csv-parse";

import { stringify } from "csv-stringify"


export function load_leaderboard(file: string): void {

    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

    else {
        parse(data, { delimiter: ";", columns: true}, (err, leaderboard) => {
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


export function update_leaderboard(country_code: string, newName: string, newScore: string, country_name: string): void {
    
    const file_path = `../PKDprojekt2025/leaderboards/${country_code}.csv`

    fs.readFile(file_path, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        parse(data, { delimiter: ";", columns: true, trim: true }, (err, leaderboard) => {
            if (err) {
                console.error("Could not parse CSV:", err);
                return;
            }


            // Add new entry
            leaderboard.push({ name: newName, score: newScore });


            // Convert leaderboard array back into CSV format
            stringify(leaderboard, { header: true, delimiter: ";" }, (err, output) => {
                if (err) {
                    console.error("Error converting to CSV:", err);
                    return;
                }

                // Save updated CSV back to file
                fs.writeFile(file_path, output, "utf8", (err) => {
                    if (err) {
                        console.error("Error saving file into CSV:", err);
                        return;
                    }
                    sort_csv(leaderboard);
                    console.log(`Leaderboard ${country_name}: `, leaderboard);
                });
            });
        });
    });
}

function sort_csv(leaderboard: {name: string; score: string | number}[]) {

    leaderboard.forEach(entry => entry.score = Number(entry.score));

    
    for(let i = 0; i < leaderboard.length; i = i + 1) {
        let biggest_index = i;
        
        for(let j = i + 1; j < leaderboard.length; j = j + 1) {
            if (leaderboard[j].score > leaderboard[biggest_index].score) {
                biggest_index = j;
            }
        }
        let temp = leaderboard[i];
        leaderboard[i] = leaderboard[biggest_index];
        leaderboard[biggest_index] = temp;
    }
    return leaderboard.slice(0, 5);         //slice tar bara element 0-5
}





