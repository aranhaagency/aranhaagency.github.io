import React, { Component} from 'react'
import * as Icon from "./icons"

class SocialConnect extends Component {
  render() {
      return (
        <div>
          <a
            href="https://github.com/aranhaagency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.Github />
          </a>
          <a
            href = "https://www.linkedin.com/in/aranha-agency-a15b81185/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.Linkedin />
          </a>
          <a
            href="https://twitter.com/aranhaagency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.Twitter />
          </a>
          <a
            href="https://instagram.com/aranhaagency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.Instagram />
          </a>
        </div>
      )
  }
}

export default SocialConnect