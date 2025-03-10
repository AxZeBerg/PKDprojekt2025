import {
    pair, Pair
} from "../PKDprojekt2025/lib/list";
    
import {
    Hints10_Sweden, Hints8_Sweden, Hints6_Sweden, Hints4_Sweden, Hints2_Sweden, Questions_Sweden,
    Hints10_Germany, Hints8_Germany, Hints6_Germany, Hints4_Germany, Hints2_Germany, Questions_Germany,
    Hints10_NewZealand, Hints8_NewZealand, Hints6_NewZealand, Hints4_NewZealand, Hints2_NewZealand, Questions_NewZealand,
    Hints10_Brazil, Hints8_Brazil, Hints6_Brazil, Hints4_Brazil, Hints2_Brazil, Questions_Brazil,
    Hints10_Italy, Hints8_Italy, Hints6_Italy, Hints4_Italy, Hints2_Italy, Questions_Italy,
    Hints10_India, Hints8_India, Hints6_India, Hints4_India, Hints2_India, Questions_India,
    Hints10_Japan, Hints8_Japan, Hints6_Japan, Hints4_Japan, Hints2_Japan, Questions_Japan,
    Hints10_Egypt, Hints8_Egypt, Hints6_Egypt, Hints4_Egypt, Hints2_Egypt, Questions_Egypt,
    Hints10_Canada, Hints8_Canada, Hints6_Canada, Hints4_Canada, Hints2_Canada, Questions_Canada,
    Hints10_Australia, Hints8_Australia, Hints6_Australia, Hints4_Australia, Hints2_Australia, Questions_Australia
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

export const Brazil: Country = {
    name: "Brazil",
    section1: [Hints10_Brazil, Hints8_Brazil, Hints6_Brazil, Hints4_Brazil, Hints2_Brazil],
    section2: Questions_Brazil,
    country_code: "LBBZ"
};

export const Italy: Country = {
    name: "Italy",
    section1: [Hints10_Italy, Hints8_Italy, Hints6_Italy, Hints4_Italy, Hints2_Italy],
    section2: Questions_Italy,
    country_code: "LBIT"
};

export const India: Country = {
    name: "India",
    section1: [Hints10_India, Hints8_India, Hints6_India, Hints4_India, Hints2_India],
    section2: Questions_India,
    country_code: "LBIN"
};

export const Japan: Country = {
    name: "Japan",
    section1: [Hints10_Japan, Hints8_Japan, Hints6_Japan, Hints4_Japan, Hints2_Japan],
    section2: Questions_Japan,
    country_code: "LBJP"
};

export const Egypt: Country = {
    name: "Egypt",
    section1: [Hints10_Egypt, Hints8_Egypt, Hints6_Egypt, Hints4_Egypt, Hints2_Egypt],
    section2: Questions_Egypt,
    country_code: "LBEG"
};

export const Canada: Country = {
    name: "Canada",
    section1: [Hints10_Canada, Hints8_Canada, Hints6_Canada, Hints4_Canada, Hints2_Canada],
    section2: Questions_Canada,
    country_code: "LBCA"
};

export const Australia: Country = {
    name: "Australia",
    section1: [Hints10_Australia, Hints8_Australia, Hints6_Australia, Hints4_Australia, Hints2_Australia],
    section2: Questions_Australia,
    country_code: "LBAU"
};

   
    
export const Array_countries: Array<Country> =
 [Sweden, Germany, New_Zealand, Brazil, Italy, India, Japan, Egypt, Canada, Australia];