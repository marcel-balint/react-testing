import React from "react";
//import PropTypes from 'prop-types'

import BasicElementsCard from "./BasicElementsCard";

const Common = (props) => {
  return (
    <div className="container">
      <h1>Common</h1>
      <section className="section-a">
        <h3>Basic elements</h3>
        <div className="section-a-box">
          <div className="box-a">
            <BasicElementsCard />

            <div className="card-a"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

//Common.propTypes = {};

export default Common;
