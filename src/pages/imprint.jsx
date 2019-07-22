import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';
import Container from '../elements/container';

const Imprint = () => {
  const data = useStaticQuery(graphql`
    query ImprintQuery {
      contentfulImprint {
        sectionTitle
        imprint {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title={data.contentfulImprint.sectionTitle} />
      <Container type="small">
        <Section title={data.contentfulImprint.sectionTitle}>
          <div dangerouslySetInnerHTML={{ __html: data.contentfulImprint.imprint.childMarkdownRemark.html }} />
        </Section>
      </Container>
    </Layout>
  );
};

export default Imprint;
