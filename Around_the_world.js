"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countries_1 = require("./countries");
var list_1 = require("../PKDprojekt2025/lib/list");
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
var csv_1 = require("../PKDprojekt2025/csv");
//tagen från https://www.quora.com/How-do-you-shuffle-an-array-of-items-using-JavaScript-or-TypeScript
function shuffleArray(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function shuffle_countries(countries) {
    var shuffeled_array = shuffleArray(countries);
    return shuffeled_array;
}
//function generate_country(countries: Array<Country>): Country {
//    const Random_Country = getRandomInt(3);
//    return Array_countries[Random_Country]
//}
var shuffeled_array = shuffle_countries(countries_1.Array_countries);
var current_index = 0;
var currentcountry = shuffeled_array[current_index];
// funktion för att starta spelet 
function menu() {
    console.log("Welcome to Around the world!\n");
    var input = prompt("Are you ready to play? (yes/no): ");
    console.log("");
    if (input === "yes") {
        hints(currentcountry);
    }
}
function country_questions(generator) {
    var frågor = shuffleArray(generator.section2);
    var point = 0;
    for (var i = 0; i < 3; i = i + 1) {
        console.log((0, list_1.head)(frågor[i]));
        var input = prompt("What is your answer? ").toLocaleLowerCase();
        if (input === (0, list_1.tail)(frågor[i])) {
            console.log("Correct!!\n");
            point++;
            player_points = player_points + 1;
        }
        else {
            console.log("incorrect\n");
        }
    }
    ;
    if (point === 3) {
        console.log("you got all 3 questions right, you get a bonus point\n");
        //player_points = player_points + point;
        player_points++;
        return player_points;
    }
    else { }
}
var player_points = 0;
function hints(generator) {
    var user = prompt("What’s your name? ");
    console.log("");
    var points = 10;
    player_points = 0;
    var hint_array = generator.section1;
    for (var i = 0; i < 5; i = i + 1) {
        var random_hint = getRandomInt(5);
        console.log(hint_array[i][random_hint]);
        console.log("");
        if (i < 4) {
            console.log("Do you wish to answer?");
            var input = prompt("Yes or No: ").toLowerCase();
            if (input === "yes") {
                var answer = prompt("What country do you think it is? ").toLowerCase();
                if (answer === generator.name.toLowerCase()) {
                    console.log("Correct, well done!\n");
                    console.log("Now you will answer questions about the country\n");
                    player_points = player_points + points;
                    country_questions(generator);
                    break;
                    //call section 2 function
                }
                else {
                    console.log("Incorrect, better luck next time");
                    console.log("Now you will answer questions about the country!\n");
                    country_questions(generator);
                    break;
                }
            }
            else {
                points = points - 2;
                console.log("Here comes the next clue worth ".concat(points, " points!"));
            }
        }
        else {
            console.log("This is the last clue so you have to answer!");
            var answer = prompt("What country do you think it is? ").toLowerCase();
            if (answer === generator.name.toLowerCase()) {
                console.log("Correct, well done!\n");
                console.log("Now you will answer questions about the country\n");
                player_points = player_points + points;
                country_questions(generator);
                break;
            }
            else {
                console.log("Incorrect, better luck next time\n");
                console.log("Now you will answer questions about the country\n");
                country_questions(generator);
                break;
            }
        }
    }
    console.log("The game is now over, well played! you got ".concat(player_points, " points"));
    (0, csv_1.update_leaderboard)(currentcountry.country_code, user, player_points.toString(), currentcountry.name); //knas await
    console.log("");
    var replay = prompt("Do you want to play again (yes or no)? ").toLowerCase();
    console.log("");
    if (replay === "yes") {
        current_index = current_index + 1;
        currentcountry = shuffeled_array[current_index];
        return hints(currentcountry);
    }
    else {
        console.log("Ok, welcome back any time!");
    }
}
menu();
