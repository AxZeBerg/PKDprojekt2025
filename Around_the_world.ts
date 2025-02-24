import {
    Country, Array_countries
} from "./countries";

import {
    pair, head, tail
} from "../PKDprojekt2025/lib/list";

import * as PromptSync from "prompt-sync";
const prompt: PromptSync.Prompt = PromptSync({ sigint: true });

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}
    
function generate_country(countries: Array<Country>): Country {
    const Random_Country = getRandomInt(1);
    return Array_countries[Random_Country]
}

let currentcountry = generate_country(Array_countries);

// funktion för att starta spelet 
function menu() {
    console.log("Welcome to Around the world!");
    let input = prompt("Are you ready to play? (yes/no): ");
    if (input === "yes") {
        hints(currentcountry);
    }
}

function make_leaderboard() {
    let array_length = currentcountry.players.length
    for (let i = 0; i < array_length - 1; i = i + 1) {
        for (let j = 0; j < array_length - 1 - i; j = j + 1) {
            if (tail(currentcountry.players[j]) < tail(currentcountry.players[j + 1])) {
                // Byt plats på spelarna om den senare har högre poäng
                let temporary = currentcountry.players[j];
                currentcountry.players[j] = currentcountry.players[j + 1];
                currentcountry.players[j + 1] = temporary;
            }
        }
    }

    // Uppdatera leaderboard med spelarnas namn i ordning
    currentcountry.leaderboard = [];
    for (let i = 0; i < array_length; i = i + 1) {
        currentcountry.leaderboard.push(head(currentcountry.players[i]));
    }
}

function hints(generator: Country) {
    let user = prompt("What’s your name? ");
    let points = 10;
    const hint_array: Array<Array<String>> = generator.section1
    for(let i = 0; i < 5; i = i + 1) {
        let random_hint = getRandomInt(1)
        console.log(hint_array[i][random_hint]);
        if (i < 4) {
            console.log("Do you wish to answer?")
            const input = prompt("Yes or No: ").toLowerCase();
            if (input === "yes") {
                const answer = prompt("What country do you think it is? ").toLowerCase();
                if(answer === generator.name.toLowerCase()) {
                    console.log("Correct, well done!");
                    console.log("Now you will answer questions about the country");
                    break;
                //call section 2 function
                } else {
                    console.log("Incorrect, better luck next time")
                    console.log("Now you will answer questions about the country")
                    break;
                }
            } else {
                points = points - 2;
                console.log(`Here comes the next clue worth ${points} points!`);
            }
        } else {
            console.log("This is the last clue so you have to answer");
            const answer = prompt("What country do you think it is? ").toLowerCase();
            if(answer === generator.name.toLowerCase()) {
                console.log("Correct, well done!");
                console.log("Now you will answer questions about the country");
                break;
            } else {
                console.log("Incorrect, better luck next time")
                console.log("Now you will answer questions about the country")
                break;
            }
        }
    }
    const new_user = pair(user, points);
    currentcountry.players.push(new_user);
    make_leaderboard();
    console.log(currentcountry.leaderboard);
}
menu();



