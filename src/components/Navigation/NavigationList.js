import React from "react";
import './Navigation.scss'

const NavList = props => {
  return (
    <div className={props.mobile? (props.hamburger ? "nav__side" : "nav__side--hidden"): "nav__side"}>
        <a href="#aboutme" class="nav__link nav__link-ltr">
          ABOUT
        </a>
        <a href="#ownprojects" class="nav__link nav__link-ltr">
          OWN PROJECTS
        </a>
        <a href="#coursesprojects" class="nav__link nav__link-ltr">
          COURSES PROJECTS
        </a>
        <a href="#mycourses" class="nav__link nav__link-ltr">
          COURSES
        </a>
        <a href="#contactme" class="nav__link nav__link-ltr">
          CONTACT
        </a>
    </div>
  )
};

export default NavList