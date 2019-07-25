import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from './seo';

import Header from './header';
import Footer from './footer';

import theme from '../../config/theme';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query GlobalQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            to
          }
        }
      }
      contentfulFooter {
        footerContent {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { menuLinks },
    },
    contentfulFooter: { footerContent },
  } = data;

  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="Home" />
        <Header menuLinks={menuLinks} />
        <main>{children}</main>
        <Footer content={footerContent} />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
