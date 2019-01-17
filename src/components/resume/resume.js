import React, { Component } from 'react';
import Lightspeed from 'react-reveal/LightSpeed';

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        {<section id="resume">
          {/* Education
----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Georgia Institute of Technology</h3>
                  <p className="info">Certification in Full Stack Web Development <span>•</span> <em className="date">April 2018 - June 2018</em></p>
                  <p>Completed a fast-paced, immersive curriculum, and learned the skills needed to become proficient in front-end and back-end technologies including
                    HTML5, CSS3, JavaScript, jQuery, C#, ASP.Net, Bootstrap, React.js, Express.js, Node.js, MongoDB, MySQL, Command Line and Git.
                  </p>
                  <p>Since graduation I've focused on becoming more proficient in Javascript and React.
                  </p>
                </div>
              </div> {/* item end */}
              {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Orange Groove, LLC</h3>
                  <p className="info">Junior Developer <span>•</span> <em className="date">January 2018 - Present</em></p>
                  
                  <p className="info">Webba.com</p>
                  <p>Helped to develop and maintain this meta-search site.</p>
                  <p>
                  Webba.com is a search engine that helps users find any information or topics on the web returning all the
                  best results from the top search engines like Google, Bing, Yahoo and many more on one page.
                  </p>
                  <p>
                  Technologies used: React, Redux, CSS Modules, HTML and Node.
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Super Cool Studio</h3>
                  <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                  <p>
                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                    ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
          </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
             </p>
             <Lightspeed left cascade> 
              <div className="bars">
                <ul className="skills">
                {/* <Lightspeed left cascade> */}
                  <li><span className="bar-expand html5" /><em>HTML5</em></li>
                  <li><span className="bar-expand css" /><em>CSS</em></li>
                  <li><span className="bar-expand javascript" /><em>Javascript</em></li>
                  <li><span className="bar-expand react" /><em>React</em></li>
                  <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                  <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                </ul>
              </div>{/* end skill-bars */}
              </Lightspeed>
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section>
        }

      </React.Fragment>
    );
  }
}