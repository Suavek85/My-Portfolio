import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import MyProjects from "./components/Projects/MyProjects/MyProjects";
import WebCourses from "./components/WebCourses/WebCourses";
import Footer from "./components/Footer/Footer";
const Header = lazy(() => import("./components/Header/Header"));

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <MyProjects />
        <WebCourses />
        <Footer />
      </div>
    );
  }
}

export default App;
