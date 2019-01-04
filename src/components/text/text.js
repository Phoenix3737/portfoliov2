import React, { Component } from "react";
export default class Text extends Component {
  render() {
    return (
      <React.Fragment>
        {
          <div className="unbreakable-container ">
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
          </div>
        }
      </React.Fragment>
    );
  }
}
