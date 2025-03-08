import {
    Country, Array_countries
} from "./countries";

import {
    head, tail
} from "../PKDprojekt2025/lib/list";

import * as PromptSync from "prompt-sync";
const prompt: PromptSync.Prompt = PromptSync({ sigint: true });

import {
    update_leaderboard
} from "../PKDprojekt2025/csv"; 


//tagen från https://www.quora.com/How-do-you-shuffle-an-array-of-items-using-JavaScript-or-TypeScript
function shuffleArray<T>(array: T[]):T[] { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }


/**
* Generates a random number
* @precondition Must be a integer
* @param Number is a integer
* @return Returns a random number between 0 and the chosen integer
*/
function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

/**
 * Shuffles the array of countries
 * @param countries an array of the diffrent countries
 * @returns A shuffled array of counties
 */
function shuffle_countries(countries: Array<Country>): Array<Country> {
    const shuffeled_array = shuffleArray(countries);
    return shuffeled_array
}
    
let shuffeled_array = shuffle_countries(Array_countries);
let current_index = 0
let currentcountry = shuffeled_array[current_index]


/**
 * Function to start the game
 * @param () no parametres
 * returns {void}
 */
function menu() {
    console.log("Welcome to Around the world!\n");
    let input = prompt("Are you ready to play? (yes/no): ");
    console.log("");
    if (input === "yes") {
        hints(currentcountry);
    }
}

/**
 * Displays the questions after guessing the country
 * @param generator a generated country
 * @returns Returns the points after answering the questions
 */
function country_questions(generator: Country) {
    const frågor = shuffleArray(generator.section2);
    let point: number = 0
    for(let i = 0; i < 3; i = i + 1) {
        console.log(head(frågor[i]));
        let input = prompt("What is your answer? ").toLocaleLowerCase();
        if (input === tail(frågor[i])) {
            console.log("Correct!!\n");
            point++;
            player_points = player_points + 1;
        }
        else {
            console.log("incorrect\n");
        }

    };
    if (point === 3) {
        console.log("you got all 3 questions right, you get a bonus point\n");
        //player_points = player_points + point;
        player_points++;
        return player_points;
    }
    else{}
}

let player_points: number = 0;

/**
 * Runs most of the game, gives the hints about the country
 * @param generator a generated country
 * @returns void
 */
function hints(generator: Country) {
    let user = prompt("What’s your name? ");
    console.log("");

    let points = 10;
    player_points = 0;

    const hint_array: Array<Array<String>> = generator.section1
    for(let i = 0; i < 5; i = i + 1) {
        let random_hint = getRandomInt(5);
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
    console.log(`The game is now over, well played! you got ${player_points} points`);

    update_leaderboard(currentcountry.country_code, user, player_points.toString(), currentcountry.name);        //knas await

    console.log("");

    const replay = prompt("Do you want to play again (yes or no)? ").toLowerCase();

    console.log("");

    if(replay === "yes") {
        current_index = current_index + 1
        currentcountry = shuffeled_array[current_index];
        return hints(currentcountry);
    }

    else {
        console.log("Ok, welcome back any time!")
    }

}
menu();








