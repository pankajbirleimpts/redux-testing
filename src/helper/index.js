export function getLetterMatchCount(guessedWord, secretWord) {
    const guessedWordSet = new Set(guessedWord.split(''));
    const secretWordSet = new Set(secretWord.split(''));
    return [...secretWordSet].filter(word => guessedWordSet.has(word)).length
}