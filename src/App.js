import React, { Component } from "react";
import GuessWords from "./GuessWords";
import Input from "./Input";
import { connect } from "react-redux";
import Congrats from "./Congrate";
import { getSecretWord } from "./actions";

export class UnConnectedApp extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jatto App</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnConnectedApp);
