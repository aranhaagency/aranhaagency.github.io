module.exports = {
  siteMetadata: {
    title: `ARANHA`,
    description: `Agência de publicidade`,
    author: `@aranhaagency`,
  },
  plugins: [
    `gatsby-plugin-favicon`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-antd`,
    `gatsby-plugin-i18n`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ARANHA`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      pathPrefix: "http://aranhaagency.github.io/web/",
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
  
