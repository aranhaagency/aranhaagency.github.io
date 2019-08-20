import React from "react"
import { navigate } from "gatsby-link"
import axios from "axios"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SocialConnect from "../../components/SocialConnect"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    axios.post(
      "https://formcarry.com/s/ETtOHVN8A5-",
      this.state,
      { headers: { "Accept": "application/json" } }
    )
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
    }
   
  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <div className="container" style={{ marginTop: "2rem" }}>
          <h2>
            Contact<span className="accent">.</span>
          </h2>
          <p>
            Wanna talk? Send me an email through the form below or get in touch
            through my social media.
          </p>

          <form
            name="contact"
            method="POST"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="hidden"
              name="bot-field"
              onChange={this.handleChange}
            />
            <div className="field">
              <label htmlFor="name">
                Name <span className="accent">*</span>
              </label>
              <input
                className="input"
                type={"text"}
                name={"name"}
                onChange={this.handleChange}
                id={"name"}
                required={true}
              />
            </div>
            <div className="field">
              <label htmlFor="email">
                Email <span className="accent">*</span>
              </label>
              <input
                className="input"
                type={"email"}
                name={"email"}
                onChange={this.handleChange}
                id={"email"}
                required={true}
              />
            </div>
            <div className="field">
              <label htmlFor="message">
                Message <span className="accent">*</span>
              </label>
              <textarea
                className="textarea"
                name={"message"}
                onChange={this.handleChange}
                id={"message"}
                required={true}
              />
            </div>
            <div className="actions">
              <button type="submit" className="special">
                Send message &raquo;
              </button>
            </div>
          </form>
          <SocialConnect />
        </div>
      </Layout>
    );
  }
}

export default Contact;