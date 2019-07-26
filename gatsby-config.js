const dotenv = require('dotenv');
const siteConfig = require('./config/site');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    description: siteConfig.description,
    author: siteConfig.author,
    menuLinks: siteConfig.menuLinks,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-eslint',
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
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: '@raae/gatsby-remark-oembed',
            options: {
              // usePrefix defaults to false
              // usePrefix: true is the same as ["oembed"]
              usePrefix: ['oembed'],
            },
          },
        ],
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
