import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../elements/section';
import Container from '../elements/container';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <Container type="small">
      <Section title="Sorry, we can’t find the page you were looking for." />
    </Container>
  </Layout>
);

export default NotFoundPage;
