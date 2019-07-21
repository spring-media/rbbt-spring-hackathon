import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

import About from '../components/about';
import LocationVenue from '../components/location-venue';
import Schedule from '../components/schedule';
import Prizes from '../components/prizes';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query indexPageQuery {
      # About
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
      # Location and Venue
      contentfulLocationAndVenue {
        sectionTitle
        address
        coordinates {
          lat
          lon
        }
        venue {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
      # Schedule
      contentfulSchedule {
        sectionTitle
        firstDay {
          title
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        secondDay {
          title
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
      # Prizes
      contentfulPrizes {
        sectionTitle
        childContentfulPrizesPrizesTextNode {
          childMarkdownRemark {
            html
          }
        }
        jury {
          title
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyContentfulFluid_tracedSVG
          }
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <About content={data.contentfulAbout} />
      <LocationVenue content={data.contentfulLocationAndVenue} />
      <Schedule content={data.contentfulSchedule} />
      <Prizes content={data.contentfulPrizes} />
    </Layout>
  );
};

export default IndexPage;
