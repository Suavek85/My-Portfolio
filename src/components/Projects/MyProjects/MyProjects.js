import React from "react";
import "./MyProjects.scss";
import { myProjectsInfo, coursesProjects } from "./ProjectsInfo";
import ProjectCard from "../../ProjectCard/ProjectCard"

const MyProjects = () => (
  <section class="section-projects__flex">
    <h1 id="ownprojects" className="ownprojects">
      INDEPENDENT PROJECTS BASED ON MY OWN IDEAS:
    </h1>
    {myProjectsInfo.map(el => {
      return (
        <>
          <ProjectCard el={ el } />
          {el.lineBreak ? <div style={{ width: '100%' }}></div> : null}
        </>
      );
    })}
    <h1>projects completed during courses:</h1>
    {coursesProjects.map(el => {
      return (
        <>
          <ProjectCard el={ el } />
          {el.lineBreak ? <div style={{width: '100%'}}></div> : null}
        </>
      );
    })}
  </section>
);

export default MyProjects;
