import {
    pair, Pair
} from "../PKDprojekt2025/lib/list";
    
import {
    Hints10_Sweden, Hints8_Sweden, Hints6_Sweden, Hints4_Sweden, Hints2_Sweden, Questions_Sweden,
    Hints10_Germany, Hints8_Germany, Hints6_Germany, Hints4_Germany, Hints2_Germany, Questions_Germany,
    Hints10_NewZealand, Hints8_NewZealand, Hints6_NewZealand, Hints4_NewZealand, Hints2_NewZealand, Questions_NewZealand
} from "../PKDprojekt2025/questions_hints";


 
export type Country = {
    name: string
    section1 : Array<Array<string>>, //stort eller litet s?
    section2: Array<Pair<string, string>>,
    country_code: string
};
    
export const Sweden: Country = {
    name: "Sweden",
    section1: [Hints10_Sweden, Hints8_Sweden, Hints6_Sweden, Hints4_Sweden, Hints2_Sweden],
    section2: Questions_Sweden,
    country_code: "LBSV"
};
    
export const Germany: Country = {
    name: "Germany",
    section1: [Hints10_Germany, Hints8_Germany, Hints6_Germany, Hints4_Germany, Hints2_Germany],
    section2: Questions_Germany,
    country_code: "LBGE"
};

export const New_Zealand: Country = {
    name: "New Zealand",
    section1: [Hints10_NewZealand, Hints8_NewZealand, Hints6_NewZealand, Hints4_NewZealand, Hints2_NewZealand],
    section2: Questions_NewZealand,
    country_code: "LBNZ"
};
    
export const Array_countries: Array<Country> = [Sweden, Germany, New_Zealand];