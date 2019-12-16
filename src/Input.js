import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    return (
      <div data-test="component-input">
        {this.props.success == false && (
          <form className="form form-inlne">
            <input
              type="text"
              placeholder="Search name here"
              data-test="input-box"
            />
            <button type="submit" data-test="button">
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { success: state.success };
};

export default connect(mapStateToProps, null)(Input);
