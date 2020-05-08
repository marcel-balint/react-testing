import React from "react";
//import PropTypes from 'prop-types'

import * as Icon from "react-bootstrap-icons";
const AnimatedBtn = (props) => {
  return (
    <React.Fragment>
      <div className="btn-inner--visible">Hover Me</div>
      <div className="btn-inner--hidden">
        <span className="text-lg svg-icon">
          <Icon.CaretRightFill />
        </span>
      </div>
    </React.Fragment>
  );
};

//AnimatedBtn.propTypes = {};

export default AnimatedBtn;
