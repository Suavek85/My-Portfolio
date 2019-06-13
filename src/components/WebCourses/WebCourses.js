import React from "react";
import "./WebCourses.css";
import { webCoursesInfo } from './WebCoursesInfo';

const WebCourses = () => (
  <section id="mycourses" class="section-courses__flex">
    <h1>WEB DEVELOPER COURSES COMPLETED:</h1>

    {webCoursesInfo.map(el => {
      return (
        <div class="courses__flex">
          <div class="course__logo">
            <div>
              <img src={el.logo} class={el.classDesc} />
            </div>
          </div>

          <div class="course__name">
            {el.name}
          </div>

          <div class="course__desc">
            {el.desc}
          </div>

          <div class="course__btns">
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
