import { actionTypes, correctGuess } from "./index";

describe("Correct Guess action", () => {
    test("Return the action with type of 'CORRECT_GUESS'", () => {
        const action = correctGuess();
        expect(action).toEqual  ({ type: actionTypes.CORRECT_GUESS });
    })
})