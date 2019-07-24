import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

// Components
import Hero from '../components/hero';
import GoogleMap from '../components/google-map';
import Schedule from '../components/schedule';
import Jury from '../components/jury';

// Elements
import Section from '../elements/section';
import Container from '../elements/container';
import Text from '../elements/text';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query indexPageQuery {
      # Hero
      contentfulHero {
        heroImage {
          fluid(maxWidth: 800, quality: 80) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        text {
          childMarkdownRemark {
            html
          }
        }
      }
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
      }

      # Location
      contentfulLocationAndVenue {
        sectionTitle
        address
        coordinates {
          lat
          lon
        }
      }

      # Schedule
      contentfulSchedule {
        sectionTitle
        firstDay {
          fluid(maxWidth: 300, quality: 80) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        secondDay {
          fluid(maxWidth: 300, quality: 80) {
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

      # Code of Conduct
      contentfulCodeOfConduct {
        sectionTitle
        childContentfulCodeOfConductCodeOfConductTextNode {
          childMarkdownRemark {
            html
          }
        }
      }

      # Contact
      contentfulContact {
        sectionTitle
        childContentfulContactContactEmailTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Hero content={data.contentfulHero} />

      <Section id="about" title={data.contentfulAbout.sectionTitle}>
        <Container type="small">
          <Text content={data.contentfulAbout.mission.childMarkdownRemark.html} />
          <Text content={data.contentfulAbout.topic.childMarkdownRemark.html} />
        </Container>
      </Section>

      <Section id="location" title={data.contentfulLocationAndVenue.sectionTitle}>
        <Container type="small">
          <p>{data.contentfulLocationAndVenue.address}</p>
          <GoogleMap coordinates={data.contentfulLocationAndVenue.coordinates} />
        </Container>
      </Section>
      <Section id="schedule" title={data.contentfulSchedule.sectionTitle}>
        <Container type="small">
          <Schedule content={data.contentfulSchedule} />
        </Container>
      </Section>

      <Section id="register" title="Register">
        &nbsp;
      </Section>

      <Section id="prizes" title={data.contentfulPrizes.sectionTitle}>
        <Container type="small">
          <Text content={data.contentfulPrizes.childContentfulPrizesPrizesTextNode.childMarkdownRemark.html} />
        </Container>
        <Container type="medium">
          <Jury />
        </Container>
      </Section>

      <Section id="coc" title={data.contentfulCodeOfConduct.sectionTitle}>
        <Container type="small">
          <Text
            content={
              data.contentfulCodeOfConduct.childContentfulCodeOfConductCodeOfConductTextNode.childMarkdownRemark.html
            }
          />
        </Container>
      </Section>

      <Section id="contact" title={data.contentfulContact.sectionTitle} center>
        <Container type="small">
          <Text
            content={data.contentfulContact.childContentfulContactContactEmailTextNode.childMarkdownRemark.html}
            center
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default IndexPage;
