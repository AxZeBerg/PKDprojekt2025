import {
    Country, Array_countries
} from "./countries";

import {
    pair, head, tail
} from "../PKDprojekt2025/lib/list";

import * as PromptSync from "prompt-sync";
const prompt: PromptSync.Prompt = PromptSync({ sigint: true });


//tagen från https://www.quora.com/How-do-you-shuffle-an-array-of-items-using-JavaScript-or-TypeScript
function shuffleArray<T>(array: T[]):T[] { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }


function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}
    
function generate_country(countries: Array<Country>): Country {
    const Random_Country = getRandomInt(2);
    return Array_countries[Random_Country]
}

let currentcountry = generate_country(Array_countries);

// funktion för att starta spelet 
function menu() {
    console.log("Welcome to Around the world!\n");
    let input = prompt("Are you ready to play? (yes/no): ");
    console.log("");
    if (input === "yes") {
        hints(currentcountry);
    }
}

function country_questions(generator: Country) {
    const frågor = shuffleArray(generator.section2);
    let point: number = 0
    for(let i = 0; i < 3; i = i + 1) {
        console.log(head(generator.section2[i]));
        let input = prompt("What is your answer? ").toLocaleLowerCase();
        if (input === tail(generator.section2[i])) {
            console.log("Correct!!");
            point++;
            player_points = player_points + 1;
        }
        else {
            console.log("incorrect");
        }

    };
    if (point === 3) {
        console.log("you got all 3 questions right, you get a bonus point");
        //player_points = player_points + point;
        player_points++;
        return player_points;
    }
    else{}
}

let player_points: number = 0;

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
    console.log("");
    let points = 10;
    const hint_array: Array<Array<String>> = generator.section1
    for(let i = 0; i < 5; i = i + 1) {
        let random_hint = getRandomInt(4);
        console.log(hint_array[i][random_hint]);
        console.log("");
        if (i < 4) {
            console.log("Do you wish to answer?")
            const input = prompt("Yes or No: ").toLowerCase();
            if (input === "yes") {
                const answer = prompt("What country do you think it is? ").toLowerCase();
                if(answer === generator.name.toLowerCase()) {
                    console.log("Correct, well done!\n");
                    console.log("Now you will answer questions about the country\n");
                    player_points = player_points + points;
                    country_questions(generator);
                    break;
                //call section 2 function
                } else {
                    console.log("Incorrect, better luck next time")
                    console.log("Now you will answer questions about the country!\n")
                    country_questions(generator);
                    break;
                }
            } else {
                points = points - 2;
                console.log(`Here comes the next clue worth ${points} points!`);
            }
        } else {
            console.log("This is the last clue so you have to answer!");
            const answer = prompt("What country do you think it is? ").toLowerCase();
            if(answer === generator.name.toLowerCase()) {
                console.log("Correct, well done!\n");
                console.log("Now you will answer questions about the country\n");
                player_points = player_points + points;
                country_questions(generator);
                break;
            } else {
                console.log("Incorrect, better luck next time\n")
                console.log("Now you will answer questions about the country\n")
                country_questions(generator);
                break;
            }
        }
    }
    const new_user = pair(user, points);
    currentcountry.players.push(new_user);
    make_leaderboard();
    console.log(currentcountry.leaderboard);
    console.log(player_points);
}
menu();



