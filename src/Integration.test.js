import { storeFactory } from "./test/TestUtils";
import { guessWord } from "./actions";
describe("Guessword action creator", () => {
  const secretWord = "party";
  const unsuccessfullGuess = "train";

  describe("No guessed words", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("Update state correctly for unsuccessfully guess", () => {
      store.dispatch(guessWord(unsuccessfullGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfullGuess,
            letterMatchCount: 3
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });

    test("Update state correctly for successfully guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe("Some guessed words", () => {
    let store;
    const guessedWords = [
      {
        guessWord: "agile",
        letterMatchCount: 1
      }
    ];
    const initialState = { guessedWords, secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("Update state correctly for unsuccessfully guess", () => {
      store.dispatch(guessWord(unsuccessfullGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [...guessedWords, { guessedWord: unsuccessfullGuess, letterMatchCount : 3 }]
      };
      expect(newState).toEqual(expectedState);
    });

    test("Update state correctly for successfully guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount : 5 }]
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
