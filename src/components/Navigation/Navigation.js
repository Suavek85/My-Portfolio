import React from "react";
import NavList from "./NavigationList";
import MobileButton from "./MobileMenu";
import "./Navigation.scss";

const Nav = props => {
  return (
    <nav className="nav">
      {props.mobile ? <MobileButton mobile={props.mobile} hamburger={props.hamburger} onMobileButtonClick={props.onMobileButtonClick} /> : <NavList />}
    </nav>
  );
};

export default Nav;
