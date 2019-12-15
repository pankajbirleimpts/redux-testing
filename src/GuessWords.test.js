import React from 'react';
import { shallow } from 'enzyme';
import GuessWords from './GuessWords';

import { findByAttr, checkProp } from './test/TestUtils';

const defaultProp = {
    guessedWords: [
        {
            guessedWord: "Train",
            letterMatchCount: 3
        }
    ]
}

const setup = (props = {}, state = {}) => {
    const setupProps = props;
    return shallow(<GuessWords {...setupProps} />);
}

test('Check the props', () => {
    checkProp(GuessWords, defaultProp);
});

describe("If there are no words guessed", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            guessedWords: []
        });
    });

    test('Render without error', () => {

        const component = findByAttr(wrapper, 'component-guess-words');
        expect(component.length).toBe(1);
    });

    test('Render instruction to guess the word', () => {
        const instruction = findByAttr(wrapper, 'guess-instruction');
        expect(instruction.text().length).not.toBe(0);
    })
})


describe("If there are words guessed", () => {
    let wrapper;
    const words = [{
        guessedWord: "Hari",
        letterMatchCount: 5
    },
    {
        guessedWord: "Ram",
        letterMatchCount: 1
    },
    {
        guessedWord: "Shiv",
        letterMatchCount: 2
    }];
    beforeEach(() => {
        wrapper = setup({
            guessedWords: words
        });
    });

    test('Render without error', () => {
        const component = findByAttr(wrapper, 'component-guess-words');
        expect(component.length).toBe(1);
    });

    test('Render guess words', () => {
        const instruction = findByAttr(wrapper, 'guess-words');
        expect(instruction.length).toBe(1);
    })
    test('Render words', () => {
        const instruction = findByAttr(wrapper, 'words');
        expect(instruction.length).toBe(words.length);
    })
});