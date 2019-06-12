import React from "react";
import "./MyProjects.css";
import { myProjectsInfo } from "./MyProjectsInfo";


const MyProjects = () => (
  <section class="section-projects__flex">
    <h1 id="ownprojects" class="ownprojects">INDEPENDENT PROJECTS BASED ON MY OWN IDEAS:</h1>

    {myProjectsInfo.map(el => {
      return (
        <div class="container">
          <div class="card">
            <div class="card__image-container">
              <img class="card__image" src={el.background} alt="App Background" />
            </div>

            <svg class="card__svg" viewBox="0 0 800 500">
              <path
                d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                stroke="transparent"
                fill="#333"
              />
              <path
                class="card__line"
                d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                stroke="pink"
                stroke-width="3"
                fill="transparent"
              />
            </svg>

            <div class="card__content">
              <h1 class="card__title">
                {el.name}<br/>{el.subName}
              </h1>
              <p>{el.desc}</p>
             
              <div class="project__btns">
                <a
                  href={el.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="project__btn-left">Preview</button>
                </a>
                <a
                  href={el.readmeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="project__btn-right">Readme</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </section>
);


export default MyProjects;
