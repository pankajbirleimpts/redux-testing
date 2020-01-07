import React from "react";
import { shallow } from "enzyme";
import App, { UnConnectedApp } from "./App";

import { findByAttr, checkProp, storeFactory } from "./test/TestUtils";

const setup = props => {
  const store = storeFactory(props);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("The redux props", () => {
  test("has success piece of state as props", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  });

  test("has access to `secretWord` state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretProps = wrapper.instance().props.secretWord;
    console.log("secretProps ", secretProps);
    expect(secretProps).toBe(secretWord);
  });

  test("has access to `guessedWords` state", () => {
    const guessedWords = [
      {
        guessedWord: "train",
        getLetterMatchCount: 3
      }
    ];
    const wrapper = setup({ guessedWords });
    const guessedWordsProps = wrapper.instance().props.guessedWords;
    expect(guessedWordsProps).toBe(guessedWords);
  });

  test("'getSecretWord' action creator is function prop", () => {
    const props = {
      success: false,
      guessedWords: [
        {
          guessedWord: "train",
          getLetterMatchCount: 3
        }
      ]
    };
    const wrapper = setup(props);
    const getSecretWordProps = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProps).toBeInstanceOf(Function);
  });
});

test("`getSecretWord` runs on App mount", () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [
      {
        guessedWord: "train",
        getLetterMatchCount: 3
      }
    ]
  };
  const wrapper = shallow(<UnConnectedApp {...props} />);
  // Run life cylce method
  wrapper.instance().componentDidMount();
  //Check to see the mock run
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
