import React, { Component } from "react";
import Navbar from "./components/navbar.js";
// import Home from "./home.js";
// import About from "./about.js";
import Menu from "./menu.js";
import Footer from "./components/footer.js";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <About /> */}
       
        <Menu />

        <Footer />
      </div>
    );
  }
}
