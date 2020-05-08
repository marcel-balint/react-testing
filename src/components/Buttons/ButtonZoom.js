import React from "react";
//import PropTypes from 'prop-types'

const Zoom = (props) => {
  return (
    <React.Fragment>
      <div>
        <div type="button" className="btn btn-primary hover-scale-110 left">
          zoom
        </div>
        <div type="button" className="btn btn-primary hover-translate-y-n3">
          translateY
        </div>
      </div>
    </React.Fragment>
  );
};

//Zoom.propTypes = {};

export default Zoom;
