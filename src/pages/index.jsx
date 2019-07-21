import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

import About from '../components/about';
import LocationVenue from '../components/location-venue';

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
      contentfulLocationAndVenue {
        sectionTitle
        address
        coordinates {
          lat
          lon
        }
      }
    }
  `);

  return (
    <Layout>
      <About content={data.contentfulAbout} />
      <LocationVenue content={data.contentfulLocationAndVenue} />
    </Layout>
  );
};

export default IndexPage;
