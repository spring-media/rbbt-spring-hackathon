import React from 'react';
import styled from 'styled-components';
import Container from '../elements/container';

const Wrapper = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.secondary.lightGrey};
  text-align: center;
`;

const Content = styled.div`
  padding-top: 4rem;
  padding-bottom: 3rem;
`;

const Footer = content => {
  const {
    content: {
      childMarkdownRemark: { html },
    },
  } = content;

  return (
    <Wrapper>
      <Container type="small">
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Wrapper>
  );
};

export default Footer;
