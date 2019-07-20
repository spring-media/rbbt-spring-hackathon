import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Navigation from './navigation';
import Footer from './footer';

import theme from '../../config/theme';
import './layout.css';

const MainContainer = styled.main`
  margin-top: 80px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
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

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header>
          <Navigation />
        </Header>
        <MainContainer>{children}</MainContainer>
        <Footer content={data.contentfulFooter.footerContent} />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
