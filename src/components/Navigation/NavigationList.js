import React from "react";
import PropTypes from "prop-types";
import "./Navigation.scss";

const NavList = props => {
  const navItemData = [
    { name: "ABOUT", dataAtt: "aboutme" },
    { name: "OWN PROJECTS", dataAtt: "ownprojects" },
    { name: "COURSES PROJECTS", dataAtt: "coursesprojects" },
    { name: "COURSES", dataAtt: "mycourses" },
    { name: "CONTACT", dataAtt: "contactme" }
  ];
  return (
    <div
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
