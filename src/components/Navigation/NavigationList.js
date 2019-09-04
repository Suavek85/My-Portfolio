import React from "react";
import './Navigation.scss'

const NavList = props => {
  return (
    <div className={props.mobile? (props.hamburger ? "nav__side" : "nav__side--hidden"): "nav__side"}>
        <div onClick={props.onMobileLinkClick} data-id='aboutme' className="nav__link nav__link-ltr">
          ABOUT
        </div>
        <div onClick={props.onMobileLinkClick} data-id='ownprojects' className="nav__link nav__link-ltr">
          OWN PROJECTS
        </div>
        <div onClick={props.onMobileLinkClick} data-id='coursesprojects' className="nav__link nav__link-ltr">
          COURSES PROJECTS
        </div>
        <div onClick={props.onMobileLinkClick} data-id='mycourses' className="nav__link nav__link-ltr">
          COURSES
        </div>
        <div onClick={props.onMobileLinkClick} data-id='contactme' className="nav__link nav__link-ltr">
          CONTACT
        </div>
    </div>
  )
};

export default NavList