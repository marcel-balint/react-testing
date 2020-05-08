import React, { Component } from "react";
//import PropTypes from "prop-types";
import Button from "../Button/Button";
import AnimatedBtn from "./AnimatedBtn";
import ButtonZoom from "./ButtonZoom";
import ButtonStates from "./ButtonStates";

import * as Icon from "react-bootstrap-icons";

class Buttons extends Component {
  state = {
    buttons: [
      {
        buttonHead: "Button",
        buttonTypeClass: "btn btn-icon btn-primary",
        buttonTypeText: "Solid Button",
      },

      {
        buttonHead: "Button Soft",
        buttonTypeClass: "btn btn-soft-primary",
        buttonTypeText: "Soft Button",
      },
      {
        buttonHead: "Button Outline",
        buttonTypeClass: "btn btn-outline-primary",
        buttonTypeText: "Outlined Button",
      },
      {
        buttonHead: "Button Brand",
        icon: <Icon.Droplet />,
        buttonTypeClass: "btn btn-dribbble",
        buttonTypeText: "Dribbble",
      },
      {
        buttonHead: "Button Icon Text",
        icon: <Icon.Gem />,
        buttonTypeClass: "btn btn-icon  btn-primary",
        buttonTypeText: "Icon Button",
      },
      {
        buttonHead: "Button Icon App",
        icon: <Icon.App />,
        buttonTypeClass: "btn btn-app",
        btnText: "Download on the",
        btnBrand: "App Store",
      },
      {
        buttonHead: "Button Animated",
        buttonTypeClass: "btn btn-animated btn-primary btn-animated-x",
        animatedBtn: <AnimatedBtn />,
      },
      {
        buttonHead: "Button Animations",
        buttonTypeClass: "btn btn-animated btn-primary btn-animated-x",
        animatedBtnZoom: <ButtonZoom />,
      },
      {
        buttonHead: "Button States",
        buttonTypeClass: "btn btn-animated btn-primary btn-animated-x",
        animatedBtnStates: <ButtonStates />,
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-buttons">
          <h1>Buttons</h1>
          {this.state.buttons.map((el) => (
            <Button
              buttonHead={el.buttonHead}
              buttonTypeClass={el.buttonTypeClass}
              buttonTypeText={el.buttonTypeText ? el.buttonTypeText : null}
              icon={el.icon ? el.icon : null}
              btnText={el.btnText ? el.btnText : null}
              btnBrand={el.btnBrand ? el.btnBrand : null}
              image={el.image ? el.image : null}
              animatedBtn={el.animatedBtn ? el.animatedBtn : null}
              animatedBtnZoom={el.animatedBtnZoom ? el.animatedBtnZoom : null}
              animatedBtnStates={
                el.animatedBtnStates ? el.animatedBtnStates : null
              }
              key={el.buttonHead}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

//Buttons.propTypes = {};

export default Buttons;
