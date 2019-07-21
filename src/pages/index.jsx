import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import About from '../components/about';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query indexPageQuery {
      contentfulAbout {
        sectionTitle
        video {
          childMarkdownRemark {
            html
          }
        }
        mission {
          childMarkdownRemark {
            html
          }
        }
        topic {
          childMarkdownRemark {
            html
          }
        }
        links {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <About content={data.contentfulAbout} />
    </Layout>
  );
};

export default IndexPage;
