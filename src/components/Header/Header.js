import React, { Component } from "react";
import ReactTooltip from 'react-tooltip';
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
    this.setState({
      hamburger: !this.state.hamburger
    });
  };

  render() {
    const descLettersString = `Hello!`;
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
          <audio id="myName">
            <source src="https://upload.wikimedia.org/wikipedia/commons/3/38/Pl-S%C5%82awek.ogg"/>
            <source src="https://od.lk/s/MjlfMTMxMTE3MjJf/Slawek2.mp3" />
          </audio>
          <div className="about-desc">
            <p className="about-desc-para">
              I am Slawek
              <span>

                <i
                  onClick={() => document.getElementById("myName").play()}
                  style={{
                    color: "orange",
                    cursor: "pointer",
                    paddingLeft: "5px"
                  }}
                  class="fas fa-volume-up"
                  data-tip 
                  data-for='pronunciation'
                  
                />
                <ReactTooltip id='pronunciation' type='info' place='top'>
                  <span className="about-desc-tooltip">/ˈswa.vɛk/</span>
                </ReactTooltip>


              </span>
            </p>
            <p className="about-desc-para">
              I enjoy coding,{this.state.mobile ? <br /> : null} challenging
              myself
            </p>
            <p className="about-desc-para">
              and solving {this.state.mobile ? <br /> : null}coding problems.
            </p>

            <p className="about-desc-para">Here's my portfolio.</p>
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
              <i className="staggering devicon-angularjs-plain" />
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
