import React, { Component } from "react";
import "./Header.scss";
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
          <ul class="nav__side">
            <li style={{color: 'white', opacity: '0.6'}} >
                SLAWOMIR NIEMIEC
            </li>
          </ul>
          <ul class="nav__side">
            <li >
              <a href="#aboutme" class="nav__link nav__link-ltr">
                ABOUT
              </a>
            </li>
            <li >
              <a href="#ownprojects" class="nav__link nav__link-ltr">
                OWN PROJECTS
              </a>
            </li>
            <li >
              <a href="#coursesprojects" class="nav__link nav__link-ltr">
                COURSES PROJECTS
              </a>
            </li>
            <li >
              <a href="#mycourses" class="nav__link nav__link-ltr">
                COURSES
              </a>
            </li>
            <li >
              <a href="#contactme" class="nav__link nav__link-ltr">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        <div class="about_wrapper">
          <h1 class="ml14 about__header">
            <span class="text-wrapper">
              <span class="letters">
                {splitString.map(el =>
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
            <p class="about-desc-para">I enjoy coding, challenging myself,</p>
            <p class="about-desc-para">and solving coding problems.</p><br/>
            <p class="about-desc-para">Here's my portfolio.</p>
          </div>

          <div class="skills">
            <h2 class="skills__header">SKILLS</h2>
            <div class="skills__icons">
              <i class="staggering fab fa-js" />
              <i class="staggering fab fa-react" />
            
            
              <i class="staggering fab fa-html5" />
              <i class="staggering fab fa-css3-alt" />
              <i class="staggering fab fa-sass" />
              <i class="staggering fab fa-github-square" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
