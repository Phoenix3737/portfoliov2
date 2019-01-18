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
                  <div>
                    <h3>Orange Groove, LLC</h3>
                    <p className="info">Junior Developer <span>•</span> <em className="date">January 2018 - Present</em></p>
                    <p className="projectName">Webba.com</p>
                    <p className="projectDescription">Helped to develop and maintain this meta-search site.</p>
                    <p className="projectDescription">
                      Webba.com is a search engine that helps users find any information or topics on the web returning all the
                      best results from the top search engines like Google, Bing, Yahoo and many more on one page.
                      </p>
                    <p className="projectDescriptionLast">
                      Technologies used: React, Redux, CSS Modules, HTML and Node.
                      </p>
                  </div>
                  <div>
                    <p className="projectName">MLB Query</p>
                    <p className="projectDescription">Made map component that zooms in on currently selected stadium.</p>
                    <p className="projectDescription">
                      MLB Query is a predictive analysis tool. It allows the user to make predictions on current 
                      baseball games based on the historical impact of like weather conditions and locations.
                      </p>
                    <p className="projectDescriptionLast">
                      Technologies used: Google Maps API, React, CSS Modules, HTML, Node and MySQL.
                      </p>
                  </div>{/* item end */}
                  <div>
                    <h3>Airco Industrial service</h3>
                    <p className="info">Director of Sales<span>•</span> <em className="date">June 2018 - Oct 2018</em></p>
                    <p className="projectDescription">
                      ● Creating marketing materials.
                      </p>
                    <p className="projectDescription">
                      ● Company website consulting.
                      </p>
                    <p className="projectDescriptionLast">
                      ● Calling on new and existing accounts in order to increase business.
                      </p>
                  </div>{/* item end */}
                  <div>
                    <h3>CHQ Water Treatment</h3>
                    <p className="info">Major Account Manager<span>•</span> <em className="date">May 2017 – March 2018 </em></p>
                    <p className="projectDescription">
                    ● Researching market opportunities for HVAC water treatment in the Savannah area.
                      </p>
                    <p className="projectDescription">
                    ● Selling an innovative water treatment solution that improves cost, safety and quality.  
                      </p>
                    <p className="projectDescription">
                    ● Working with regional mechanical contractors to ensure installation quality of our system.  
                      </p>
                    <p className="projectDescriptionLast">
                    ● Networking to find new distributorship sources and large potential clients.  
                      </p>
                  </div>{/* item end */}
                  <div>
                    <h3>Lift Power</h3>
                    <p className="info">Customer Sales and Service Representative<span>•</span> <em className="date">July 2016 – May 2017 </em></p>
                    <p className="projectDescription">
                    ● Cold calling to find new opportunities in the Savannah and surrounding markets.                       </p>
                    <p className="projectDescription">
                    ● Contracting new customers for service of forklifts of all makes and models. 
                      </p>
                    <p className="projectDescription">
                    ● Selling other material handling solutions such as Dock and Door, Pallet Racking and Lighting. 
                      </p>
                    <p className="projectDescriptionLast">
                    ● New and Used forklift sales 
                      </p>
                  </div>{/* item end */}
                  <div>
                    <h3>Hytorc Industrial Bolting</h3>
                    <p className="info">Mobile Repair Technician / Regional Sales and Rental<span>•</span> <em className="date">April 2013 – July 2016</em></p>
                    <p className="projectDescription">
                      ● Reprogram, repair, and calibrate industrial equipment including, but not limited to, computerized bolting machinery.
                      </p>
                    <p className="projectDescription">
                      ● Reprogram and repair software based systems used for calibrating bolting machinery.
                      </p>
                    <p className="projectDescription">
                      ● Covering a three-state territory generating new sales, rental, and service opportunities while increasing business relationships with existing
                      customers in the pulp and paper, mining, power generation, and manufacturing industries among others.
                      </p>
                    <p className="projectDescriptionLast">
                      ● Providing demonstration and education on proprietary equipment to prospective and existing customers.
                      </p>
                  </div>{/* item end */}
                  <div>
                    <h3>NAPA Auto Parts</h3>
                    <p className="info">Outside Sales <span>•</span> <em className="date">May 2004 – April 2013</em></p>
                    <p className="projectDescription">
                    ● Training customers and employees on computer technologies designed to make business more efficient. 
                      </p>
                    <p className="projectDescription">
                    ● Training customers on the use of state of the art automotive diagnostic equipment. 
                      </p>
                    <p className="projectDescription">
                    ● Training new employees on customer set up for NapaOnline.com 
                      </p>
                    <p className="projectDescription">
                    ● Responsible for generating new sales opportunities and growing sales with existing customers.  
                      </p>
                    <p className="projectDescriptionLast">
                    Providing demonstration and education on proprietary equipment to prospective and existing customers.
                      </p>
                  </div>
                </div>{/* item end */}
                  <div>
                    <h3>TaggleSnooth Media, LLC</h3>
                    <p className="info">Owner<span>•</span> <em className="date">2008 - 2010</em></p>
                    <p className="projectDescription">
                    ● Company logo creation.
                      </p>
                    <p className="projectDescription">
                    ● Magazine advertisements. 
                      </p>
                    <p className="projectDescription">
                    ● Custom graphical content including original cartoons for bloggers and web developers. 
                      </p>
                    <p className="projectDescriptionLast">
                    ● Website creation using Wordpress templates.
                      </p>
                  </div>
                </div>{/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <p>Well rounded general knowlege of HTML5, CSS3, JavaScript, jQuery, C#, ASP.Net, Bootstrap, React.js, Express.js, Node.js, MongoDB, MySQL, Command Line and Git.
             </p>
              <p>Javascript and React.js focused.
             </p>
              <Lightspeed left cascade>
                <div className="bars">
                  <ul className="skills">
                    {/* <Lightspeed left cascade> */}
                    <li><span className="bar-expand html5" /><em>HTML5</em></li>
                    <li><span className="bar-expand css" /><em>CSS/Bootstrap</em></li>
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