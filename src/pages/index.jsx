import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

// Components
import Hero from '../components/hero';
import Section from '../elements/section';
import Container from '../elements/container';
import About from '../components/about';
import LocationVenue from '../components/location-venue';
import Schedule from '../components/schedule';
import Register from '../components/register';
import Text from '../elements/text';
import Jury from '../components/jury';
import LogoLinks from '../components/logo-links';

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
      # Main Partners
      contentfulMainPartners {
        sectionTitle
        logos {
          title
          description
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyContentfulFluid_withWebp
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
      }
      # Partners
      contentfulPartners {
        sectionTitle
        logos {
          title
          description
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      # Contact
      contentfulContact {
        sectionTitle
        contactEmail {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Hero />
      <Section id="about" title={data.contentfulAbout.sectionTitle}>
        <Container type="small">
          <About content={data.contentfulAbout} />
        </Container>
      </Section>

      <Section title={data.contentfulMainPartners.sectionTitle}>
        <Container type="small">
          <LogoLinks content={data.contentfulMainPartners} />
        </Container>
      </Section>

      <Section id="location" title={data.contentfulLocationAndVenue.sectionTitle}>
        <Container type="small">
          <LocationVenue content={data.contentfulLocationAndVenue} />
        </Container>
      </Section>

      <Section id="schedule" title={data.contentfulSchedule.sectionTitle}>
        <Schedule content={data.contentfulSchedule} />
      </Section>

      <Section id="register" title="Register">
        <Register />
      </Section>

      <Section id="prizes" title={data.contentfulPrizes.sectionTitle}>
        <Container type="small">
          <Text content={data.contentfulPrizes.childContentfulPrizesPrizesTextNode.childMarkdownRemark.html} center />
        </Container>
        <Container type="medium">
          <Jury />
        </Container>
      </Section>

      <Section id="partners" title={data.contentfulPartners.sectionTitle}>
        <Container type="small">
          <LogoLinks content={data.contentfulPartners} />
        </Container>
      </Section>

      <Section id="contact" title={data.contentfulContact.sectionTitle}>
        <Container type="small">
          <Text content={data.contentfulContact.contactEmail.childMarkdownRemark.html} center />
        </Container>
      </Section>
    </Layout>
  );
};

export default IndexPage;
