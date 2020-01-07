import React from "react";
import { shallow } from "enzyme";
import Input, { UnConnectedInput } from "./Input";

import { findByAttr, checkProp, storeFactory } from "./test/TestUtils";

const setup = props => {
  const store = storeFactory(props);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Words has not been guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      success: false
    });
  });

  test("Render without error", () => {
    const component = findByAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
  });

  test("Render button component", () => {
    const component = findByAttr(wrapper, "button-submit");
    expect(component.length).toBe(1);
  });

  test("Render input box component", () => {
    const component = findByAttr(wrapper, "input-box");
    expect(component.length).toBe(1);
  });
});

describe("Words has been guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      success: true
    });
  });

  test("Render without error", () => {
    const component = findByAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
  });

  test("Render button component", () => {
    const component = findByAttr(wrapper, "button-submit");
    expect(component.length).toBe(0);
  });

  test("Render input box component", () => {
    const component = findByAttr(wrapper, "input-box");
    expect(component.length).toBe(0);
  });
});

describe("The redux props", () => {
  test("has success piece of state as props", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  });

  test("'guessword' action creator is function prop", () => {
    const wrapper = setup();
    const guessWordProps = wrapper.instance().props.guessWord;
    expect(guessWordProps).toBeInstanceOf(Function);
  });
});

describe("`guessWord` action creator call", () => {
  let guessWordMock;
  let wrapper;
  let guessedWord = "train";
  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
      success: false
    };
    wrapper = shallow(<UnConnectedInput {...props} />);

    wrapper.setState({
      currentGuess: guessedWord
    });

    // Run life cylce method
    const buttonComponent = findByAttr(wrapper, "button-submit");
    buttonComponent.simulate("click", { preventDefault(){}});
  });

  test("call `guessWord` on button clicked", () => {
    //Check to see the mock run
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test("call `guessWord` with input values as argument", () => {
    //Check to see the mock run
    console.log(guessWordMock.mock.calls);
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });

  test("Input value should clear after submit buttton", () => {
    expect(wrapper.state("currentGuess")).toBe("");
  });
});
