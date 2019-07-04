import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"

import "../assets/sass/style.scss"



const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }} className="logo-aranha">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: 15,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      
    </div>
    <nav>
      <Nav />
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
