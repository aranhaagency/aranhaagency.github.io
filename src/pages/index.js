import React from "react"
import Typed from "react-typed"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialConnect from "../components/SocialConnect"

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
        <SocialConnect />
      </div>
    </section>
  </Layout>
)

export default IndexPage
