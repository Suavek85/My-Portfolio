import React from "react";
import "./Navigation.scss";
import NavList from "./NavigationList";
import PropTypes from "prop-types";

const MobileButton = props => {
  return (
    <div className={props.hamburger ? "menu__opened" : "menu__closed"}>
      <div
        className={props.hamburger ? "hamburger--active hamburger" : "hamburger"}
        onClick={props.onMobileButtonClick}
      >
        <span class="hamburger__container" >
          <span class="hamburger__bars" />
        </span>
      </div>
      <NavList onMobileLinkClick={props.onMobileLinkClick} mobile={props.mobile} hamburger={props.hamburger} />
    </div>
  );
};

MobileButton.propTypes = {
  mobile: PropTypes.bool,
  hamburger: PropTypes.bool,
  onMobileButtonClick: PropTypes.func,
};

export default MobileButton;
