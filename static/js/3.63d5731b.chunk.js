(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{33:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(4),l=t(7),s=t(5),i=t(8),c=t(0),o=t.n(c),m=(t(34),t(35)),g=(t(33),function(e){return o.a.createElement("div",{className:e.mobile?e.hamburger?"nav__side":"nav__side--hidden":"nav__side"},o.a.createElement("a",{href:"#aboutme",class:"nav__link nav__link-ltr"},"ABOUT"),o.a.createElement("a",{href:"#ownprojects",class:"nav__link nav__link-ltr"},"OWN PROJECTS"),o.a.createElement("a",{href:"#coursesprojects",class:"nav__link nav__link-ltr"},"COURSES PROJECTS"),o.a.createElement("a",{href:"#mycourses",class:"nav__link nav__link-ltr"},"COURSES"),o.a.createElement("a",{href:"#contactme",class:"nav__link nav__link-ltr"},"CONTACT"))}),u=function(e){return o.a.createElement("div",{className:e.hamburger?"menu__opened":"menu__closed"},o.a.createElement("div",{style:{position:"absolute",top:"0",left:"0",marginLeft:"15px",marginTop:"15px"},className:e.hamburger?"hamburger--active":null,onClick:e.onMobileButtonClick,class:"hamburger"},o.a.createElement("span",{class:"hamburger__container"},o.a.createElement("span",{class:"hamburger__bars"}))),o.a.createElement(g,{mobile:e.mobile,hamburger:e.hamburger}))},d=function(e){return o.a.createElement("nav",null,e.mobile?o.a.createElement(u,{mobile:e.mobile,hamburger:e.hamburger,onMobileButtonClick:e.onMobileButtonClick}):o.a.createElement(g,null))},p=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={mobile:!1,hamburger:!1},t.onMobileButtonClick=function(){console.log(t.state.hamburger),t.setState({hamburger:!t.state.hamburger})},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.timeline({loop:!1}).add({targets:".ml14 .line",scaleX:[0,1],opacity:[.5,1],easing:"easeInOutExpo",duration:1300}).add({targets:".ml14 .letter",opacity:[0,1],translateX:[40,0],translateZ:0,scaleX:[.3,1],easing:"easeOutExpo",duration:800,offset:"-=600",delay:function(e,a){return 150+25*a}});var a=document.querySelectorAll(".staggering");Object(m.a)({targets:a,translateY:-370,delay:m.a.stagger(350,{start:2500}),rotate:m.a.stagger([360,360])});var t=function(){window.innerWidth>640?e.setState({mobile:!1}):e.setState({mobile:!0})};t(),window.onresize=t}},{key:"render",value:function(){var e="Hello, I am Slawek".split("");return o.a.createElement("section",{id:"aboutme",class:"about"},o.a.createElement(d,{mobile:this.state.mobile,onMobileButtonClick:this.onMobileButtonClick,hamburger:this.state.hamburger}),o.a.createElement("div",{class:"about_wrapper"},o.a.createElement("h1",{class:"ml14 about__header"},o.a.createElement("span",{class:"text-wrapper"},o.a.createElement("span",{class:"letters"},e.map(function(e){return e.match(/[^\s*$]/i)?o.a.createElement("span",{class:"letter"},e):o.a.createElement("span",null," ")})),o.a.createElement("span",{class:"line"}))),o.a.createElement("div",{class:"about-desc"},o.a.createElement("p",{class:"about-desc-para"},"I enjoy coding, challenging myself,"),o.a.createElement("p",{class:"about-desc-para"},"and solving coding problems."),o.a.createElement("br",null),o.a.createElement("p",{class:"about-desc-para"},"Here's my portfolio.")),o.a.createElement("div",{class:"skills"},o.a.createElement("h2",{class:"skills__header"},"EXPERIENCE WITH"),o.a.createElement("div",{class:"skills__new-icons"},o.a.createElement("i",{className:"staggering devicon-html5-plain-wordmark"}),o.a.createElement("i",{className:"staggering devicon-css3-plain-wordmark"}),o.a.createElement("i",{className:"staggering devicon-sass-original"}),o.a.createElement("i",{className:"staggering devicon-bootstrap-plain"}),o.a.createElement("i",{className:"staggering devicon-javascript-plain"}),o.a.createElement("i",{className:"staggering devicon-react-original-wordmark"}),o.a.createElement("i",{className:"staggering devicon-github-plain-wordmark"}),o.a.createElement("i",{className:"staggering devicon-webpack-plain-wordmark"}),o.a.createElement("i",{className:"staggering devicon-nodejs-plain-wordmark"}),o.a.createElement("i",{className:"staggering devicon-express-original-wordmark"}),o.a.createElement("i",{className:"staggering devicon-postgresql-plain-wordmark"}),o.a.createElement("i",{className:"staggering devicon-wordpress-plain-wordmark"}),o.a.createElement("i",{className:"staggering devicon-babel-plain"}),o.a.createElement("i",{className:"staggering",style:{fontSize:"16px",padding:"1.35em .8em"}},"NPM"),o.a.createElement("i",{className:"staggering",style:{fontSize:"16px",padding:"1.35em .8em"}},"Redux")))))}}]),a}(c.Component);a.default=p}}]);
//# sourceMappingURL=3.63d5731b.chunk.js.map