import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Icons from "./SkillsListData";
import anime from "animejs/lib/anime.es.js";
import Nav from "../Navigation/Navigation";
import "./Header.scss";

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

  onMobileLinkClick = (event) => {
    window.location.hash = '';
    window.location.hash = `#${event.currentTarget.dataset.id}`;
    this.setState({
      hamburger: false,
    });
  }

  render() {
    const descLettersString = `Hello!`;
    const splitString = descLettersString.split("");

    return (
      <section id="aboutme" className="about">
        <Nav
          mobile={this.state.mobile}
          hamburger={this.state.hamburger}
          onMobileButtonClick={this.onMobileButtonClick}
          onMobileLinkClick={this.onMobileLinkClick}
        />
        <div class="about__wrapper">
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
            <source src="https://upload.wikimedia.org/wikipedia/commons/3/38/Pl-S%C5%82awek.ogg" />
            <source src="https://od.lk/s/MjlfMTMxMTE3MjJf/Slawek2.mp3" />
          </audio>
          <div className="about-desc">
            <p className="about-desc__para">
              I am Slawek
              <span>
                <i
                  onClick={() => document.getElementById("myName").play()}
                  className="fas fa-volume-up volume-icon"
                  data-tip
                  data-for="pronunciation"
                />
                <ReactTooltip id="pronunciation" type="info" place="top">
                  <span className="about-desc__tooltip">/ˈswa.vɛk/</span>
                </ReactTooltip>
              </span>
            </p>
            <p className="about-desc__para">
              I enjoy coding,{this.state.mobile ? <br /> : null} challenging
              myself
            </p>
            <p className="about-desc__para">
              and solving {this.state.mobile ? <br /> : null}coding problems.
            </p>
            <p className="about-desc__para">Here's my portfolio.</p>
          </div>
          <Icons />
        </div>
      </section>
    );
  }
}

export default Header;
