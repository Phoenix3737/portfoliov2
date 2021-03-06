import React, { Component } from 'react';
import Text from '../../components/text/text.js';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {<header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    {/* <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
    <ul id="nav" className="nav">
      <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
      <li><a className="smoothscroll" href="#about">About</a></li>
      <li><a className="smoothscroll" href="#resume">Resume</a></li>
      <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
      {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
      <li><a className="smoothscroll" href="#contact">Contact</a></li>
    </ul> 
  </nav> 
  <div className="row banner">
    <div className="banner-text">
    <Text />
     
      
    </div>
  </div>
  <p className="scrolldown fade">
    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
  </p>
</header>
}

      </React.Fragment>
    );
  }
}

