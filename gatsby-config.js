const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: 'Springathon 2019',
    description: 'Springathon 19th and 20th of August 2019',
    author: 'sebastian.spoerer@spring-media.de',
    menuLinks: [
      {
        name: 'home',
        to: '/',
      },
      {
        name: 'about',
        to: '/#',
      },
      {
        name: 'location',
        to: '/#location',
      },
      {
        name: 'schedule',
        to: '/#schedule',
      },
      {
        name: 'register',
        to: '/#register',
      },
      {
        name: 'prizes',
        to: '/#prizes',
      },
      {
        name: 'Rules',
        to: '/#rules',
      },
      {
        name: 'contact',
        to: '/#contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-eslint',
    'gatsby-transformer-remark',
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#0000ff',
        theme_color: '#0000ff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
