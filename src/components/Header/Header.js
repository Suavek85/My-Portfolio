import React, { Component } from "react";
import "./Header.css";
import anime from "animejs/lib/anime.es.js";

class Header extends Component {
  componentDidMount() {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml14 .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeInOutExpo",
        duration: 1300
      })
      .add({
        targets: ".ml14 .letter",
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: "-=600",
        delay: function(el, i) {
          return 150 + 25 * i;
        }
      });

    const elements = document.querySelectorAll(".staggering");
    anime({
      targets: elements,
      translateY: -370,
      delay: anime.stagger(250, { start: 1500 }),
      rotate: anime.stagger([360, 360])
    });
  }

  render() {
    const descLettersString = `Hello, I am Suavek`;
    const splitString = descLettersString.split("");
    
    return (
      <section id="aboutme" class="about">
        <nav class="nav">
          <ul class="menu">
            <li class="menu__item">
              <a href="#aboutme" class="menu__link">
                SLAWOMIR NIEMIEC
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="menu__item">
              <a href="#aboutme" class="menu__link">
                ABOUT
              </a>
            </li>
            <li class="menu__item">
              <a href="#ownprojects" class="menu__link">
                OWN PROJECTS
              </a>
            </li>
            <li class="menu__item">
              <a href="#coursesprojects" class="menu__link">
                PROJECTS FROM COURSES
              </a>
            </li>
            <li class="men__item">
              <a href="#mycourses" class="menu__link">
                COURSES
              </a>
            </li>
            <li class="men__item">
              <a href="#contactme" class="menu__link">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        <h1 class="ml14 about__header">
          <span class="text-wrapper">
            <span class="letters">
              {splitString.map((el, i) =>
                el.match(/[^\s*$]/i) ? (
                  <span class="letter">{el}</span>
                ) : (
                  <span> </span>
                )
              )}
            </span>
            <span class="line" />
          </span>
        </h1>

        <div class="about-desc">
          I love coding and solving problems in my free time. Here's my short
          portfolio.
        </div>

        <div class="skills">
          <h2 class="skills__header">SKILLS</h2>
          <div class="skills__icons">
            <i class="staggering fab fa-html5" />
            <i class="staggering fab fa-css3-alt" />
            <i class="staggering fab fa-js" />
            <i class="staggering fab fa-github-square" />
            <i class="staggering fab fa-react" />
            <i class="staggering fab fa-sass" />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
