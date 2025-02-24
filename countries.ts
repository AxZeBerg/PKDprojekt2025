import {
    pair, Pair
} from "../PKDprojekt2025/lib/list";
    
    
const Hints10_Sweden = ["This country had around 593 billion USD BNP last year"];
const Hints8_Sweden = ["Women could vote in this country 1919"];
const Hints6_Sweden = ["The largest lake in this country is called Vänern"];
const Hints4_Sweden = ["Zlatan Ibrahimovic was born in this country"];
const Hints2_Sweden = ["Stockholm is the capital of this country"];
 
export type Country = {
    name: string
    section1 : Array<Array<string>>, //stort eller litet s?
    section2: Array<Pair<string, string>>,
    players: Array<Pair<string, number>>,
    leaderboard: Array<String> //kanske stack?
};
    
export const Sweden: Country = {
    name: "Sweden",
    section1: [Hints10_Sweden, Hints8_Sweden, Hints6_Sweden, Hints4_Sweden, Hints2_Sweden],
    section2: [pair("fråga", "svar"), pair("fråga", "svar"), pair("fråga", "svar")],
    players: [pair("Albert", 0)],
    leaderboard: []
};
    
export const Tyskland: Country = {
    name: "Tyskland",
    section1: [[], [], [], []],
    section2: [pair("fråga", "svar"), pair("fråga", "svar"), pair("fråga", "svar")],
    players: [pair("Albert", 16), pair("Ida", 14), pair("axeL", 3)],
    leaderboard: ["Albert", "Ida", "axeL"]
};
    
export const Array_countries: Array<Country> = [Sweden, Tyskland];