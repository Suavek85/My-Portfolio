import React from "react";
import "./Header.scss";

const SkillsListData = [
  { name: null, classNames: "devicon-html5-plain-wordmark", style: null },
  { name: null, classNames: "devicon-css3-plain-wordmark", style: null },
  { name: null, classNames: "devicon-sass-original", style: null },
  { name: null, classNames: "devicon-bootstrap-plain", style: null },
  { name: null, classNames: "devicon-javascript-plain", style: null },
  { name: null, classNames: "devicon-react-original-wordmark", style: null },
  { name: null, classNames: "devicon-angularjs-plain", style: null },
  { name: null, classNames: "devicon-github-plain-wordmark", style: null },
  { name: null, classNames: "devicon-webpack-plain-wordmark", style: null },
  { name: null, classNames: "devicon-nodejs-plain-wordmark", style: null },
  { name: null, classNames: "devicon-express-original-wordmark", style: null },
  { name: null, classNames: "devicon-postgresql-plain-wordmark", style: null },
  { name: null, classNames: "devicon-wordpress-plain-wordmark", style: null },
  { name: null, classNames: "devicon-babel-plain", style: null },
  {
    name: "Redux",
    classNames: null,
    style: { fontSize: "16px", padding: "1.35em .8em" }
  },
  {
    name: "NPM",
    classNames: null,
    style: { fontSize: "16px", padding: "1.35em .8em" }
  }
];

const staggering = "staggering";

const renderSkills = el => {
  return (
    <i className={el.classNames + " " + staggering} style={el.style}>
      {el.name}
    </i>
  );
};

const Icons = () => {
  return (
    <div class="skills">
      <h2 class="skills__header">EXPERIENCE WITH</h2>
      <div class="skills__new-icons">{SkillsListData.map(renderSkills)}</div>
    </div>
  );
};

export default Icons
