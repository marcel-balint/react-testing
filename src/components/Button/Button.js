import React from "react";

//import PropTypes from "prop-types";

const Buttons = (props) => {
  const BtnStatesCopmenent = props.animatedBtnStates
    ? props.animatedBtnStates
    : null;
  return (
    <div className="button-box">
      <div className="button-head">
        <h3>{props.buttonHead}</h3>
        <button>Show HTML</button>
      </div>

      {BtnStatesCopmenent ? (
        BtnStatesCopmenent
      ) : (
        <div className="button-body">
          <div className="center-btn">
            {props.animatedBtnZoom ? (
              props.animatedBtnZoom
            ) : (
              <button className={props.buttonTypeClass}>
                <span className="svg-icon">{props.icon}</span>
                <span className="btn-text">{props.btnText}</span>
                <span className="btn-brand">{props.btnBrand}</span>
                {props.animatedBtn}
                {props.buttonTypeText}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

//Buttons.propTypes = {};

export default Buttons;
