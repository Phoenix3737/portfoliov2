// Dependencies
import React, { Component } from 'react';
// Externals
import Field from './field';
import Button from './button';


export default class extends Component {
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
      {/* form */}
      <form action method="post" action="send_form_email.php" id="contactForm" name="contactForm">
        <fieldset>
        <div>
        {/* Name field */}
        <Field
          label="Name"
          onChange={(event) => this.updateField('name', event.target.value)}
          value={this.state.name}
        />
        {/* Email field */}
        <Field
          label="Email"
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email}
        />
        <Field
          label="Subject"
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email}
        />
        {/* Message textarea */}
        <Field
          label="Message"
          onChange={(event) => this.updateField('message', event.target.value)}
          /* This should be written like 'textarea' */
          textarea={true}
          value={this.state.message}
        />
        {/* Submit button */}
        <Button
          email="groves999@gmail.com"
          formValues={this.state}
        />
      </div>
          {/* <div>
            <button className="submit">Submit</button>
            <span id="image-loader">
              <img alt src="images/loader.gif" />
            </span>
          </div> */}
        </fieldset>
      </form> {/* Form End */}
      {/* contact-warning */}
      <div id="message-warning"> Error boy</div>
      {/* contact-success */}
      <div id="message-success">
        <i className="fa fa-check" />Your message was sent, thank you!<br />
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
  </div>
</section>
}

      </React.Fragment>
    );
  }
}