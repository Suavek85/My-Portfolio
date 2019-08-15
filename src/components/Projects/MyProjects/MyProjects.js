import React from "react";
import "../Projects.scss";
import { myProjectsInfo } from "./MyProjectsInfo";

const MyProjects = () => (
  <section class="section-projects__flex">
    <h1 id="ownprojects" className="ownprojects">
      INDEPENDENT PROJECTS BASED ON MY OWN IDEAS:
    </h1>

    {myProjectsInfo.map(el => {
      return (
        <>
          <div className="container">
            <div className="card">
              <div className="card__image-container">
                <img
                  className="card__image"
                  src={el.background}
                  alt="App Background"
                />
              </div>

              <svg class="card__svg" viewBox="0 0 800 500">
                <path
                  d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                  stroke="transparent"
                  fill="#333"
                />
                <path
                  className="card__line"
                  d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                  stroke="pink"
                  strokeWidth="3"
                  fill="transparent"
                />
              </svg>

              <div className="card__content card__content--margin">
                <h1 className="card__title">
                  {el.name}
                  <br />
                  {el.subName}
                </h1>
                <p>{el.desc}</p>

                <div className="project__btns">
                  <a
                    href={el.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button class="project__btn">Preview</button>
                  </a>
                  <a
                    href={el.readmeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button class="project__btn">Readme</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {el.lineBreak ? <div style={{width: '100%'}}></div> : null}
        </>
      );
    })}
  </section>
);

export default MyProjects;
