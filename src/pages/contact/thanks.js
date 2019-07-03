import React from "react";

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SocialConnect from "../../components/SocialConnect"

const Thanks = () => (
  <Layout>
    <SEO title="Thank you!" />
    <div className="container" style={{ marginTop: "2rem" }}>
      <h2>
        Thank you<span className="accent">.</span>
      </h2>
      <p>
        Your message has been captured Let 's get back to you as soon as possible.
        <br />
       In the meantime, feel free to explore the spider 's web in social networks.
      </p>
    <SocialConnect />
    </div>
  </Layout>
);
export default Thanks