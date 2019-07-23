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
    query SiteTitleQuery {
      contentfulFooter {
        footerContent {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="Home" />
        <Header />
        <main>{children}</main>
        <Footer content={data.contentfulFooter.footerContent} />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
