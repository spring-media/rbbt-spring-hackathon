import React from 'react';
import styled from 'styled-components';
import Container from '../elements/container';

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.secondary.darkGrey};
  text-align: center;
`;

const Content = styled.div`
  color: #fff;
  padding-top: 2em;
  padding-bottom: 1em;

  a {
    color: #fff;
  }
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
