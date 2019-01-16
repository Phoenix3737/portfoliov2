import React, { Component } from "react";

/* delays any animation from starting until the content loads, preventing timing issues */

document.body.classList.add('js-loading');

window.addEventListener("load", showPage, false);

function showPage() {
  document.body.classList.remove('js-loading');
}

export default class Text extends Component {
  render() {
    return (
      <React.Fragment>
        {
          <div className="intro-container">
            <div className="intro">
              <span className="hi intro-text">Hi, </span>
              <span className="im intro-text">I'm </span>
              <span className="mark intro-text">Mark </span>
              <span className="groves intro-text">Groves </span>
              <span className="web intro-text">Web Developer</span>
            </div>
            <div className="animate skills">
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
