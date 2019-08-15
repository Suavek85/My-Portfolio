import React from "react";
import "./Navigation.scss";
import NavList from "./NavigationList";

const MobileButton = props => {
  return (
    <div className={props.hamburger ? "menu__opened" : "menu__closed"}>
      <div
        style={{
          position: "absolute",
          top: "4px",
          left: "4px",
          marginLeft: "5px",
          marginTop: "5px"
        }}
        className={props.hamburger ? "hamburger--active" : null}
        onClick={props.onMobileButtonClick}
        class="hamburger"
      >
        <span class="hamburger__container" >
          <span class="hamburger__bars" />
        </span>
      </div>
      <NavList mobile={props.mobile} hamburger={props.hamburger} />
    </div>
  );
};

export default MobileButton;
