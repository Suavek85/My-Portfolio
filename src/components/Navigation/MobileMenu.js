import React from "react";
import "./Navigation.scss";
import NavList from "./NavigationList";
import PropTypes from "prop-types";
import cls from 'classnames';

const MobileButton = props => {

  const { hamburger, onMobileButtonClick, mobile, onMobileLinkClick } = props;

  const getHamburgerClass = () => {
    return cls({
      'hamburger--active hamburger': hamburger,
      'hamburger': true,
    })
  }

  return (
    <div className={hamburger ? "menu__opened" : "menu__closed"}>
      <div
        className={getHamburgerClass()}
        onClick={onMobileButtonClick}
      >
        <span className="hamburger__container" >
          <span className="hamburger__bars" />
        </span>
      </div>
      <NavList 
        onMobileLinkClick={onMobileLinkClick} 
        mobile={mobile} 
        hamburger={hamburger} 
      />
    </div>
  );
};

MobileButton.propTypes = {
  mobile: PropTypes.bool,
  hamburger: PropTypes.bool,
  onMobileButtonClick: PropTypes.func,
};

export default MobileButton;
