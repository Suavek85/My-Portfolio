import React from "react";
import PropTypes from "prop-types";
import "./Navigation.scss";

const NavList = props => {
  const navItemData = [
    { name: "ABOUT", dataAtt: "aboutme", key: 1 },
    { name: "OWN PROJECTS", dataAtt: "ownprojects", key: 2 },
    { name: "COURSES PROJECTS", dataAtt: "mycourses", key: 4 },
    { name: "CONTACT", dataAtt: "contactme", key: 5 }
  ];
  return (
    <div
      data-test="nav-wrapper"
      className={
        props.mobile
          ? props.hamburger
            ? "nav__side"
            : "nav__side--hidden"
          : "nav__side"
      }
    >
      {navItemData.map(el => {
        return (
          <div
            data-test="nav-item"
            key={el.key}
            onClick={props.onMobileLinkClick}
            data-id={el.dataAtt}
            className="nav__link nav__link-ltr"
          >
            {el.name}
          </div>
        );
      })}
    </div>
  );
};

NavList.propTypes = {
  mobile: PropTypes.bool,
  hamburger: PropTypes.bool,
  onMobileLinkClick: PropTypes.func
};

export default NavList;
