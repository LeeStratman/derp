module.exports = {
  siteMetadata: {
    title: `derp.`,
    description: `A 4-piece pop-punk/rock band from Madison, WI`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#060606`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpeg`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
  ],
}
