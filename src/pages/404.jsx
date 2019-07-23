import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../elements/section';
import Container from '../elements/container';

import Brule from '../images/brule-omg.gif';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <Container type="small">
      <Section title="Sorry, we can’t find the page you were looking for." center />
      <Wrapper>
        <img src={Brule} alt="Uh oh" />
      </Wrapper>
    </Container>
  </Layout>
);

export default NotFoundPage;
