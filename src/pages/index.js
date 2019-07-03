import React from "react"
import Typed from "react-typed"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import * as Icon from "../components/icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" 
        keywords = {
          [
            `Curtiba`,
            `front end developer`,
            `react developer`,
            `javascript developer`,
            `ARANHA AGENCY`,
            `developer`,
            `london`,
            `Rio de Janeiro`,
            `Brasil`,
            `Advertising`,
            `Integrated Advertising`,
            `Networking`,
            `Advertising Agency`,
            `Agencia de Publiade`,
            `Publicidade no Whatsapp`,
            `New York Advertising Agency`,
            `Curitiba Advertising Agency`,
            `Rio Advertising Agency`,
            `Agência de Publicidade`,
            `Rio Agência`,
            `Goiania Agencia de Publicidade`


          ]
      }
    />

     <section id="home">
      <div className="container" style={{ position: `relative`, zIndex: 1 }}>
        <h2>
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[
              "We <span class='accent'>ARANHA</span> Agency",
              "We <span class='accent'>CREATIVE AGENCY</span>.",
              "We are <span class='accent'>Publicidade</span>.",
              "We are <span class='accent'>Propaganda</span> mind."
            ]}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
            className="typed"
          />
        </h2>
        <p>
          Somos o futuro da propaganda,{" "}
          <Link to="/contact/">
            <strong>Vamos tomar um café</strong>
          </Link>{" "}
        </p>
        <a
          href="https://github.com/aranhaagency"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <Icon.Github />
        </a>
        <a
          href="https://www.linkedin.com/in/aranha-agency-a15b81185/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <Icon.Linkedin />
        </a>
        <a
          href="https://twitter.com/aranhaagency"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <Icon.Twitter />
        </a>
        <a
          href="https://instagram.com/aranhaagency"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <Icon.Instagram />
        </a>
      </div>
    </section>
  </Layout>
)

export default IndexPage
