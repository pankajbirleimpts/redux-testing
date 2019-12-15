import React from 'react';
import PropTypes from 'prop-types';
const Congrate = (props) => {
    if (props.success) {
        return (
            <div data-test="component-congrate">
                <div data-test="congrate-message">
                    Congrate! You guess the word!
                </div>
            </div>)
    } else return <div data-test="component-congrate"></div>

}


Congrate.propTypes = {
    success: PropTypes.bool.isRequired,
};

export default Congrate;