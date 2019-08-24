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
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '612142959299987',
      },
    },
    {
      resolve: `gatsby-plugin-cookiehub`,
      options: {
        cookihubId: `643d82f5`,
        trackingId: `UA-141019633-4`,
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-141019633-4",
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
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
