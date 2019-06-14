import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MyProjects from "./components/Projects/MyProjects/MyProjects";
import CoursesProjects from "./components/Projects/CoursesProjects/CoursesProjects";
import WebCourses from "./components/WebCourses/WebCourses";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header />
        <MyProjects />
        <CoursesProjects />
        <WebCourses />
        <Footer />
      </div>
    );
  }
}

export default App;
