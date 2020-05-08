import React from "react";
//import PropTypes from 'prop-types'

const ButtonStates = (props) => {
  const spinnerStyles = {
    color: "#262626",
    backgroundColor: "#d3d6e0",
    borderColor: "#cccfda",
  };
  return (
    <React.Fragment>
      <div className="wrapper-btn-states">
        <div className="btn-states-box">
          <div type="button" className="btn btn-primary active">
            Active
          </div>
          <div type="button" className="btn btn-secondary active">
            Active
          </div>
          <div
            type="button"
            className="btn btn-primary disabled"
            disabled={true}
          >
            Disabled
          </div>
          <div
            type="button"
            className="btn btn-secondary disabled"
            disabled={true}
          >
            Disabled
          </div>
          <div
            type="button"
            className="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            Single toggle
          </div>
          <div type="button" className="btn btn-primary">
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Loading...</span>
          </div>
          <div
            type="button"
            style={spinnerStyles}
            className="btn btn-secondary"
          >
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

//ButtonStates.propTypes = {};

export default ButtonStates;
