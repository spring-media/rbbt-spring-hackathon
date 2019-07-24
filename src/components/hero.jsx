/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  margin: 0 auto;
  overflow: hidden;
  max-width: ${props => props.theme.layout.medium};

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    background: red;
    height: 100%;
  }
`;

const HeroImage = styled(Img)`
  width: 100%;
`;

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  background: ${props => props.theme.color.inkBlue};
  text-transform: uppercase;
  font-weight: bold;
  padding: 1.5rem 3rem;
  font-size: 26px;
  text-align: center;
  line-height: 3rem;
  color: #fff;
  margin-bottom: 1em;
  box-shadow: ${props => props.theme.shadow.base};

  a {
    color: #fff;
  }
`;

const Hero = ({ content }) => {
  const {
    heroImage: { fluid },
    text: {
      childMarkdownRemark: { html },
    },
  } = content;

  return (
    <Wrapper>
      <InnerWrapper>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </InnerWrapper>
      <HeroImage fluid={fluid} />
    </Wrapper>
  );
};

export default Hero;
