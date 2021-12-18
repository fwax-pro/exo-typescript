import { closest, raceHorse, sentenceChangeKeyword, stringToASCIIAverageValue, stringToNumberTotalCount } from "./helper";
import { temperatures, temperature, diff } from "./datas/temperatures";
import { strings } from "./datas/strings";
import { stringToNumberTotalCounts } from "./datas/stringToNumberTotalCounts";
import { stringWithKeyword } from "./datas/stringWithKeyword";
import { horses } from "./datas/horses";

describe.each(temperatures)('temperature', ({inputs, description, expected}) => {
    test(description, () => {
        const result = closest(inputs.map(Number), temperature, diff);
        expect(result).toBe(expected);
    })
})

describe.each(strings)("String => ASCII average value", ({input, description, expected}) => {
    test(description, () => {
        const result = stringToASCIIAverageValue(input);
        expect(result).toBe(expected);
    })
})

describe.each(stringToNumberTotalCounts)("String => number totalCount", ({input, description, expected}) => {
    test(description, () => {
        const result = stringToNumberTotalCount(input);
        expect(result).toBe(expected);
    })
})

describe.each(stringWithKeyword)("Sentence + Keyword => Sentence + KEYWORD", ({input, keyword, description, expected}) => {
    test(description, () => {
        const result = sentenceChangeKeyword(input, keyword);
        expect(result).toBe(expected);
    })
})

describe.each(horses)("Race Horses", ({inputs, description, expected}) => {
    test(description, () => {
        const result = raceHorse(inputs);
        expect(result).toBe(expected);
    })
})