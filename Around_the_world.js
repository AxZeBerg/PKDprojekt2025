"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countries_1 = require("./countries");
var list_1 = require("../PKDprojekt2025/lib/list");
var PromptSync = require("prompt-sync");
var prompt = PromptSync({ sigint: true });
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function generate_country(countries) {
    var Random_Country = getRandomInt(1);
    return countries_1.Array_countries[Random_Country];
}
var currentcountry = generate_country(countries_1.Array_countries);
// funktion för att starta spelet 
function menu() {
    console.log("Welcome to Around the world!");
    var input = prompt("Are you ready to play? (yes/no): ");
    if (input === "yes") {
        hints(currentcountry);
    }
}
function make_leaderboard() {
    var array_length = currentcountry.players.length;
    for (var i = 0; i < array_length - 1; i = i + 1) {
        for (var j = 0; j < array_length - 1 - i; j = j + 1) {
            if ((0, list_1.tail)(currentcountry.players[j]) < (0, list_1.tail)(currentcountry.players[j + 1])) {
                // Byt plats på spelarna om den senare har högre poäng
                var temporary = currentcountry.players[j];
                currentcountry.players[j] = currentcountry.players[j + 1];
                currentcountry.players[j + 1] = temporary;
            }
        }
    }
    // Uppdatera leaderboard med spelarnas namn i ordning
    currentcountry.leaderboard = [];
    for (var i = 0; i < array_length; i = i + 1) {
        currentcountry.leaderboard.push((0, list_1.head)(currentcountry.players[i]));
    }
}
function hints(generator) {
    var user = prompt("What’s your name? ");
    var points = 10;
    var hint_array = generator.section1;
    for (var i = 0; i < 5; i = i + 1) {
        var random_hint = getRandomInt(1);
        console.log(hint_array[i][random_hint]);
        if (i < 4) {
            console.log("Do you wish to answer?");
            var input = prompt("Yes or No: ").toLowerCase();
            if (input === "yes") {
                var answer = prompt("What country do you think it is? ").toLowerCase();
                if (answer === generator.name.toLowerCase()) {
                    console.log("Correct, well done!");
                    console.log("Now you will answer questions about the country");
                    break;
                    //call section 2 function
                }
                else {
                    console.log("Incorrect, better luck next time");
                    console.log("Now you will answer questions about the country");
                    break;
                }
            }
            else {
                points = points - 2;
                console.log("Here comes the next clue worth ".concat(points, " points!"));
            }
        }
        else {
            console.log("This is the last clue so you have to answer");
            var answer = prompt("What country do you think it is? ").toLowerCase();
            if (answer === generator.name.toLowerCase()) {
                console.log("Correct, well done!");
                console.log("Now you will answer questions about the country");
                break;
            }
            else {
                console.log("Incorrect, better luck next time");
                console.log("Now you will answer questions about the country");
                break;
            }
        }
    }
    var new_user = (0, list_1.pair)(user, points);
    currentcountry.players.push(new_user);
    make_leaderboard();
    console.log(currentcountry.leaderboard);
}
menu();
