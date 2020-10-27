import React, { Component, lazy } from "react";
import "./App.css";
import MyProjects from "./components/Projects/MyProjects/MyProjects";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <MyProjects />
        <Experience />
        <Footer />
      </div>
    );
  }
}

export default App;
