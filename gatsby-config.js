module.exports = {
  siteMetadata: {
    title: "Rohan Portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rohans-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        
        icon: `./src/images/favicon.png`, // This path is relative to the root of the site.
      },
    }
  ],
};
