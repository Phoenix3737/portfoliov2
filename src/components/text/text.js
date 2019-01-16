import React, { Component } from "react";
export default class Text extends Component {
  render() {
    return (
      <React.Fragment>
        {
          <div className="unbreakable-container">
            <div className="unbreakable">
              <span className="hi unbreakable-text">Hi, </span>
              <span className="im unbreakable-text">I'm </span>
              <span className="mark unbreakable-text">Mark </span>
              <span className="groves unbreakable-text">Groves </span>
              <span className="web unbreakable-text">Web Developer</span>
            </div>
            <div className="animate ks">
              Front End Developer | CSS | JavaScript | React
            </div>
            <h3 className="fade"><a className="smoothscroll" href="#about">Start scrolling </a>to learn more <a className="smoothscroll" href="#about">about me</a>.</h3>

            <ul className="social fade">
              <li><a href="https://www.linkedin.com/in/mark-groves-45289a68/" target="_blank"><i className="fa fa-linkedin fa-2x" /></a></li>
              <li><a href="https://github.com/Phoenix3737" target="_blank"><i className="fa fa-github fa-2x" /></a></li>
            </ul>
          </div>
        }
      </React.Fragment>
    );
  }
}
