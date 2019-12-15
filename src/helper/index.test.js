import { getLetterMatchCount } from "./index";

describe("getLetterMatchCount", ()=> {
    const secretWord = 'party';
    test('return correct count when  no matching', ()=>{
        const letterMatch = getLetterMatchCount("bonus", secretWord);
        expect(letterMatch).toBe(0);
    })
    test('return correct count where 3 matching words', ()=>{
        const letterMatch = getLetterMatchCount("train", secretWord);
        expect(letterMatch).toBe(3);
    })
    test('return correct count where duplicate matching words', ()=>{
        const letterMatch = getLetterMatchCount("part", secretWord);
        expect(letterMatch).toBe(4);
    })
})