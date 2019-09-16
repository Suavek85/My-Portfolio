import React from "react";
import PropTypes from "prop-types";
import NavList from "./NavigationList";
import MobileButton from "./MobileMenu";
import "./Navigation.scss";

const Nav = props => {
  return (
    <nav>
      {props.mobile ? (
        <MobileButton
          mobile={props.mobile}
          hamburger={props.hamburger}
          onMobileButtonClick={props.onMobileButtonClick}
          onMobileLinkClick={props.onMobileLinkClick}
        />
      ) : (
        <NavList onMobileLinkClick={props.onMobileLinkClick} />
      )}
    </nav>
  );
};

Nav.propTypes = {
  mobile: PropTypes.bool,
  hamburger: PropTypes.bool
};

export default Nav;
