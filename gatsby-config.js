// //for algolia config
// const queries = require('./src/utils/algolia');

//dot env to hide keys
require("dotenv").config({
  path: `.env`,
})

//module
module.exports = {
  siteMetadata: {
    title: `Developer Jahid`,
    description: `Gatsby Srarter by Developer Jahid`,
    author: `@developerjahid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // //algolia plugin
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //  }
    // },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `developerjahid-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/developerjahid-icon.webp`,
      },
    },
    // `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/blog`,
    //     name: `blog`,
    //   },
    // },

    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
  ],
}
