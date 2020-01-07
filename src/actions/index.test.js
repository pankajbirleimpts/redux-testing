import moxios from "moxios";
import { getSecretWord } from "./";
import { storeFactory } from "../test/TestUtils";

describe("GetSecretword action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("Add response word to state", () => {
    const secretWord = "party";
    const store = storeFactory({ secretWord });
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState(); 
      console.log("newState ", newState);
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
