// Dependencies
import React, { Component } from 'react';
// Externals
// import Field from './field';
// import Button from './button';


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
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
      {<section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">Have a question or want to work together? Drop me a line anytime.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">

            <form id="contactForm" method="POST" action="mailer.php" onSubmit={this.handleSubmit}>
                <fieldset className="form-group">
                <label for="form_name">Name</label>
                <input type="text" value={this.state.contactName} className="form-control" id="form_name" onChange={this.handleNameChange} />
                </fieldset>

                <fieldset className="form-group">
                <label for="form_email">E-mail:</label>
                <input value={this.state.contactEmail} className="form-control" id="form_email" type="email" onChange={this.handleEmailChange} />
                </fieldset>

                <fieldset className="form-group">
                <label for="form_msg">Message:</label>
                <textarea value={this.state.contactMessage} className="form-control" id="form_msg" onChange={this.handleMessageChange} ></textarea>
                </fieldset>
            </form>

          </div>
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Email and Phone</h4>
            <p className="address">
              Mark Groves<br />
              <span>(912) 604-8114</span><br />
              <span>groves999@gnail.com</span>
            </p>
          </div>
          {/* <div className="widget widget_tweets">
            <h4 className="widget-title">Latest Tweets</h4>
            <ul id="twitter">
              <li>
                <span>
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                  <a href="#">http://t.co/CGIrdxIlI3</a>
                </span>
                <b><a href="#">2 Days Ago</a></b>
              </li>
              <li>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi
                  <a href="#">http://t.co/CGIrdxIlI3</a>
                </span>
                <b><a href="#">3 Days Ago</a></b>
              </li>
            </ul>
          </div> */}
        </aside>
    </section>
}

      </React.Fragment>
    );
  }
}