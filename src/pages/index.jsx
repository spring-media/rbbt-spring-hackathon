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
        # links {
        #   childMarkdownRemark {
        #     html
        #   }
        # }
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
        # venue {
        #   fluid(maxWidth: 800, quality: 90) {
        #     ...GatsbyContentfulFluid_tracedSVG
        #   }
        # }
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
        childContentfulPrizesApiPrizesTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
      # Partners
      contentfulPartners {
        sectionTitle
        # logos {
        #   title
        #   description
        #   fluid(maxWidth: 300, quality: 90) {
        #     ...GatsbyContentfulFluid_withWebp
        #   }
        # }
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

      <Section title={data.contentfulMainPartners.sectionTitle} center>
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
        <Container type="small">
          <Schedule content={data.contentfulSchedule} />
        </Container>
      </Section>

      <Section id="register" title="Register">
        <Register />
      </Section>

      <Section id="prizes" title={data.contentfulPrizes.sectionTitle}>
        <Container type="small">
          <Text content={data.contentfulPrizes.childContentfulPrizesPrizesTextNode.childMarkdownRemark.html} />
          <Text content={data.contentfulPrizes.childContentfulPrizesApiPrizesTextNode.childMarkdownRemark.html} />
        </Container>
        <Container type="medium">
          <Jury />
        </Container>
      </Section>

      {/* <Section id="partners" title={data.contentfulPartners.sectionTitle} center>
        <Container type="medium">
          <LogoLinks content={data.contentfulPartners} />
        </Container>
      </Section> */}

      <Section id="contact" title={data.contentfulContact.sectionTitle} center>
        <Container type="small">
          <Text content={data.contentfulContact.contactEmail.childMarkdownRemark.html} center />
        </Container>
      </Section>
    </Layout>
  );
};

export default IndexPage;
