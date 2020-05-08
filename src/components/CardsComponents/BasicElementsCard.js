import React from "react";
//import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const BasicElementsCard = (props) => {
  return (
    <React.Fragment>
      <div className="card-a">
        <div className="card" style={{ width: "300px", height: "200px" }}>
          <div className="card-body">
            <Link to="/btn-page">
              <button className="btn-button">Button ></button>
            </Link>
          </div>
          <div className="card-bottom">
            <a href="1" className="btn-title">
              Buttons
            </a>
            <a href="1" className="btn-component">
              13 components
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

//BasicElements.propTypes = {};

export default BasicElementsCard;
