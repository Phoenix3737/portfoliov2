import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      {<section id="portfolio">
           
  <div className="row">
  <Bounce>
    <div className="twelve columns collapsed">
      <h1>Portfolio</h1>
      {/* portfolio-wrapper */}
      
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
      
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-01" title="true">
              <img alt="Tron Triva" src="images/portfolio/tron-link.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Game</h5>
                  <p>Javascript</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-02" title="true">
              <img alt="Sports Giphy's" src="images/portfolio/SN-link.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Giphy Finder</h5>
                  <p>Javascript | API</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-03" title="true">
              <img alt="Game of Thrones Hangman" src="images/portfolio/got-link.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Game</h5>
                  <p>Javascript</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-04" title="true">
              <img alt="Virtual Bartender" src="images/portfolio/mood-shot-link.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Virtual Bartender</h5>
                  <p>React | Face++ | Axios</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-05" title="true">
              <img alt="" src="images/portfolio/modals/webba-link.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Webba</h5>
                  <p>React | Express | API</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-06" title="true">
              <img alt="" src="images/portfolio/girl.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Girl</h5>
                  <p>Photography</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-07" title="true">
              <img alt="" src="images/portfolio/origami.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Origami</h5>
                  <p>Illustrration</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-08" title="true">
              <img alt="" src="images/portfolio/retrocam.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Retrocam</h5>
                  <p>Web Development</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>  {/* item end */}
        
      </div> {/* portfolio-wrapper end */}
      
    </div> {/* twelve columns end */}
    
    {/* Modal Popup
        --------------------------------------------------------------- */}
    <div>
    <div id="modal-01" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/tron-link.png" alt="" />
      <div className="description-box">
        <h4>Tron Trivia</h4>
        <p>Test your knowledge of the classic sci-fi film Tron.</p>
        <span className="categories"><i className="fa fa-tag" />Javascript</span>
      </div>
      <div className="link-box">
        <a href="https://phoenix3737.github.io/TriviaGame/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
    <div id="modal-02" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/SN-link.png" alt="" />
      <div className="description-box">
        <h4>Console</h4>
        <p>Find giphy's of your favorite teams and atheletes.</p>
        <span className="categories"><i className="fa fa-tag" />Javascript | API</span>
      </div>
      <div className="link-box">
        <a href="https://phoenix3737.github.io/Sports-Giphy/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-02 End */}
    <div id="modal-03" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/got-link.png" alt="" />
      <div className="description-box">
        <h4>Game of Thrones Hangman Game</h4>
        <p>Guess the word to escape the hangman's noose.</p>
        <span className="categories"><i className="fa fa-tag" />Javascript</span>
      </div>
      <div className="link-box">
        <a href="https://phoenix3737.github.io/Hangman-Game/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-03 End */}
    <div id="modal-04" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/mood-shot-link.png" alt="" />
      <div className="description-box">
        <h4>Mood Shot</h4>
        <p>A virtual bartender that analysizes your photo and then suggests the best drink for your mood.</p>
        <span className="categories"><i className="fa fa-tag" />React | Face++ | Axios</span>
      </div>
      <div className="link-box">
        <a href="https://phoenix3737.github.io/moodShotv3/" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-04 End */}
    <div id="modal-05" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/webba-link.png" alt="" />
      <div className="description-box">
        <h4>Webba</h4>
        <p>A meta search engine that crawls other search engines like Google, Bing, Yahoo, Indeed and others under one search input to return the best results from each.</p>
        <span className="categories"><i className="fa fa-tag" />React | Express | API</span>
      </div>
      <div className="link-box">
        <a href="http://www.webba.com" target="_blank">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-05 End */}
    <div id="modal-06" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
      <div className="description-box">
        <h4>Girl</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Photography</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-06 End */}
    <div id="modal-07" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
      <div className="description-box">
        <h4>Origami</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-07 End */}
    <div id="modal-08" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
      <div className="description-box">
        <h4>Retrocam</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
    </div>
    </Bounce>
  </div> {/* row End */}
</section>
}

      </React.Fragment>
    );
  }
}