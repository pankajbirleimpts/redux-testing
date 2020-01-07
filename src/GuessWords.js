import React from "react";
import PropTypes from "prop-types";

const GuessWords = props => {
  // console.log("GuessWords props ", props);

  let content;
  if (props.guessedWords.length === 0) {
    content = (
      <div data-test="guess-instruction">Try to guess the secret words!</div>
    );
  } else {
    const tbody = props.guessedWords.map((word, key) => {
      return (
        <tr data-test="words" key={key}>
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      );
    });
    content = (
      <div data-test="guess-words">
        <h4>Guess Words</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Word</th>
              <th>Matching Letter</th>
            </tr>
          </thead>
          <tbody>{tbody}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guess-words">{content}</div>;
};

GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string,
      letterMatchCount: PropTypes.number
    })
  ).isRequired
};

export default GuessWords;
