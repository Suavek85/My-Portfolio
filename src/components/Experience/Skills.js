import React from "react";
import "./Skills.scss";

const skillsListData = [
  { name: null, classNames: "devicon-javascript-plain", style: null },
  { name: null, classNames: "devicon-react-original-wordmark", style: null },
  { name: null, classNames: "devicon-html5-plain-wordmark", style: null },
  { name: null, classNames: "devicon-css3-plain-wordmark", style: null },
  { name: null, classNames: "devicon-sass-original", style: null },
  { name: null, classNames: "devicon-github-plain-wordmark", style: null },
  { name: null, classNames: "devicon-gitlab-plain", style: null },
];

const renderSkills = el => {
  return (
    <i className={el.classNames} style={el.style}>
      {el.name}
    </i>
  );
};

const Icons = () => {
  return (
    <div class="skills">
      <h2 class="skills__header">EXPERIENCE WITH</h2>
      <div class="skills__new-icons">
        { skillsListData.map(renderSkills) }
      </div>
      <p>Redux, Jest, Enzyme, Mocha, React Spring, Express.js, Webpack, New Relic, SQL, Gatsby.js, Angular, Docker.</p>
    </div>
  );
};

export default Icons
