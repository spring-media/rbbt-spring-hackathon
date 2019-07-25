import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../elements/section';
import Container from '../elements/container';
import Text from '../elements/text';

const Impressum = () => {
  const data = useStaticQuery(graphql`
    query ImpressumQuery {
      contentfulImpressum {
        sectionTitle
        childContentfulImpressumImpressumTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  const {
    contentfulImpressum: {
      sectionTitle,
      childContentfulImpressumImpressumTextNode: {
        childMarkdownRemark: { html },
      },
    },
  } = data;
  return (
    <Layout>
      <SEO title={sectionTitle} />
      <Section title={sectionTitle}>
        <Container type="small">
          <Text content={html} />
        </Container>
      </Section>
    </Layout>
  );
};

export default Impressum;
