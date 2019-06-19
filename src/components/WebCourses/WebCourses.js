import React from "react";
import "./WebCourses.scss";
import { webCoursesInfo } from './WebCoursesInfo';

const WebCourses = () => (
  <section id="mycourses" class="section-courses__flex">
    <h1>SELECTED WEB DEVELOPER COURSES COMPLETED:</h1>

    {webCoursesInfo.map(el => {
      return (
        <div class="courses__flex">
          <div class="courses__logo">
            <div>
              <img src={el.logo} class={el.classDesc} alt={el.logo} />
            </div>
          </div>

          <div class="courses__name">
            {el.name}
          </div>

          <div class="courses__desc">
            {el.desc}
          </div>

          <div class="courses__btns">
            <a
              href={el.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="button-course-1">More info</button>
            </a>
          </div>
        </div>
      );
    })}
  </section>
);

export default WebCourses;
