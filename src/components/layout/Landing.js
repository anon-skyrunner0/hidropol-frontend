import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron";
import Footer from "../Footer";
import Monitoring from "../Monitoring";

class Landing extends Component {
  render() {
    return (
      <>
        <Jumbotron />
        <Monitoring />
      </>
    );
  }
}

export default Landing;
