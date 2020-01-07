import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions/index";

export class UnConnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: ""
    };
  }

  submitGuessWord = event => {
    event.preventDefault();
    const { currentGuess } = this.state;
    if (currentGuess && currentGuess.length > 0) {
      this.props.guessWord(this.state.currentGuess);
      this.setState({
        currentGuess: ""
      });
    }
  };
  render() {
    return (
      <div data-test="component-input">
        {this.props.success == false && (
          <form className="form form-inline">
            <div class="form-group mb-2">
              <input
                className="form-control"
                type="text"
                placeholder="Search name here"
                data-test="input-box"
                value={this.state.currentGuess}
                onChange={event =>
                  this.setState({ currentGuess: event.target.value })
                }
              />

              <button
                className="btn btn-primary"
                style={{marginLeft: 10}}
                type="submit"
                data-test="button-submit"
                onClick={evt => {
                  this.submitGuessWord(evt);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { success: state.success };
};

export default connect(mapStateToProps, { guessWord })(UnConnectedInput);
