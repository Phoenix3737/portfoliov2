import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {<section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/profilePic_2.png" alt="Mark Groves" />
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p>I have a passion for coding and learning new programming technologies. It gives me great satisfaction when I can create something apealing, usable art, 
        for people to interact with. I wholeheartedly believe that it makes a difference in peoples’ lives when we build something that saves time and prevents 
        stressful tasks. When I'm not coding I can be found spending time with my kids, drawing, exercising, building something, repairing something or 
        doing anything outdoors.
      </p>
      <div className="row">
        <div className="columns contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            <span>Mark Groves</span><br />
            <span>(912)604-8114</span><br />
            <span>groves999@gmail.com</span>
          </p>
        </div>
        <div className="columns download">
          <p>
            <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section>
}
     
      </React.Fragment>
    );
  }
}