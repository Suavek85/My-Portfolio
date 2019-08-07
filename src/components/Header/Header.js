import React, { Component } from "react";
import "./Header.scss";
import anime from "animejs/lib/anime.es.js";
import Nav from "../Navigation/Navigation";

class Header extends Component {
  state = {
    mobile: false,
    hamburger: false
  };

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
      delay: anime.stagger(350, { start: 2500 }),
      rotate: anime.stagger([360, 360])
    });

    const onWindowResize = () => {
      let width = window.innerWidth;
      if (width > 640) {
        this.setState({
          mobile: false
        });
      } else {
        this.setState({
          mobile: true
        });
      }
    };
    onWindowResize();
    window.onresize = onWindowResize;
  }

  onMobileButtonClick = () => {
    console.log(this.state.hamburger);
    this.setState({
      hamburger: !this.state.hamburger
    });
  };

  render() {
    const descLettersString = `Hello, I am Slawek`;
    const splitString = descLettersString.split("");

    return (
      <section id="aboutme" class="about">
        <Nav
          mobile={this.state.mobile}
          onMobileButtonClick={this.onMobileButtonClick}
          hamburger={this.state.hamburger}
        />
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
            <p class="about-desc-para">and solving coding problems.</p>
            <br />
            <p class="about-desc-para">Here's my portfolio.</p>
          </div>
          <div class="skills">
            <h2 class="skills__header">EXPERIENCE WITH</h2>
            <div class="skills__new-icons">
              <i className="staggering devicon-html5-plain-wordmark" />
              <i className="staggering devicon-css3-plain-wordmark" />
              <i className="staggering devicon-sass-original" />
              <i className="staggering devicon-bootstrap-plain" />
              <i className="staggering devicon-javascript-plain" />
              <i className="staggering devicon-react-original-wordmark" />
              <i className="staggering devicon-angularjs-plain"/>
              <i className="staggering devicon-github-plain-wordmark" />
              <i className="staggering devicon-webpack-plain-wordmark" />
              <i className="staggering devicon-nodejs-plain-wordmark" />
              <i className="staggering devicon-express-original-wordmark" />
              <i className="staggering devicon-postgresql-plain-wordmark" />
              <i className="staggering devicon-wordpress-plain-wordmark" />
              <i className="staggering devicon-babel-plain" />
              <i
                className="staggering"
                style={{ fontSize: "16px", padding: "1.35em .8em" }}
              >
                NPM
              </i>
              <i
                className="staggering"
                style={{ fontSize: "16px", padding: "1.35em .8em" }}
              >
                Redux
              </i>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
