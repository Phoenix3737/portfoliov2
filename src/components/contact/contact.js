// Dependencies
import React, { Component } from "react";
// Externals
// import Field from "./field";
// import Button from "./button";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <React.Fragment>
        {
          <section id="contact">
            <div className="row section-head">
              <div className="two columns header-col">
                <h1>
                  <span>Get In Touch.</span>
                </h1>
              </div>
              <div className="ten columns">
                <p className="lead">
                  Have a question or want to work together? Drop me a line
                  anytime.
                </p>
              </div>
            </div>
              
              <div className="row">
                  <div className="eight columns">
                    <form method="POST" action="https://formspree.io/groves999@gmail.com">
                      <div>
                        <label for="contactMessage">Name <span class="required">*</span></label>
                        <input type="text" name="name" placeholder="Elon Musk"></input>
                      </div>
                      <div>
                        <label for="contactMessage">Email <span class="required">*</span></label>
                        <input type="email" name="email" placeholder="Elon@Telsa.com"></input>
                      </div>
                      <div>
                        <label for="contactMessage">Subject</label>
                        <input type="text" name="subject" placeholder="I want to hire you!"></input>
                      </div>
                      <div>
                        <label for="contactMessage">Message <span class="required">*</span></label>
                        <textarea name="message" placeholder="What would you like to say?"></textarea>
                      </div>
                      <button type="submit">Send Message</button>
                    </form>
                </div>
              
               
                  <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">
                      <h4>Email and Phone</h4>
                      <p className="address">
                        Mark Groves
                        <br />
                        <span>(912) 604-8114</span>
                        <br />
                        <span>groves999@gnail.com</span>
                      </p>
                    </div>
                  </aside>
              </div>
          </section>
        }
      </React.Fragment>
    );
  }
}




                {/* <form
                  method="post"
                  action=""
                  id="contactForm"
                  name="contactForm"
                >
                  <fieldset>
                    <div>
                      <label htmlFor="contactName">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue
                        size={35}
                        id="contactName"
                        name="contactName"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactEmail">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue
                        size={35}
                        id="contactEmail"
                        name="contactEmail"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactSubject">Subject</label>
                      <input
                        type="text"
                        defaultValue
                        size={35}
                        id="contactSubject"
                        name="contactSubject"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactMessage">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        cols={50}
                        rows={15}
                        id="contactMessage"
                        name="contactMessage"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button className="submit">Submit</button>
                      <span id="image-loader">
                        <img alt src="images/loader.gif" />
                      </span>
                    </div>
                  </fieldset>
                </form> */}

         
