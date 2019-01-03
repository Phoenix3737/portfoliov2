import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {<header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    <ul id="nav" className="nav">
      <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
      <li><a className="smoothscroll" href="#about">About</a></li>
      <li><a className="smoothscroll" href="#resume">Resume</a></li>
      <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
      <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
      <li><a className="smoothscroll" href="#contact">Contact</a></li>
    </ul> 
  </nav> 
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I am {resumeData.name}.</h1>
      <h3>I'm a {resumeData.role}.{resumeData.roleDescription} Let's <a className="smoothscroll" href="#about">start scrolling </a>
        and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
      <hr />
      <ul className="social">
        {/* <li><a href="#"><i className="fa fa-facebook" /></a></li>
        <li><a href="#"><i className="fa fa-twitter" /></a></li>
        <li><a href="#"><i className="fa fa-google-plus" /></a></li> */}
        <li><a href="https://www.linkedin.com/in/mark-groves-45289a68/" target="_blank"><i className="fa fa-linkedin fa-2x" /></a></li>
        <li><a href="https://github.com/Phoenix3737" target="_blank"><i className="fa fa-github fa-2x" /></a></li>
        {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li>
        <li><a href="#"><i className="fa fa-skype" /></a></li> */}
      </ul>
    </div>
  </div>
  <p className="scrolldown">
    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
  </p>
</header>
}

      </React.Fragment>
    );
  }
}

