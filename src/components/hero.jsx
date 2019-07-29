/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 75vh;
  margin: 0 auto;
  margin-top: 80px;
  overflow: hidden;
  max-width: ${props => props.theme.layout.medium};

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 50vh;
  }
`;

const HeroImage = styled(Img)`
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 500px;
  z-index: 1;
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
  font-size: calc(1vw + 1vh + 0.5vmin);
  text-align: center;
  line-height: 3rem;
  color: #fff;
  margin-bottom: 1em;
  box-shadow: ${props => props.theme.shadow.base};

  a {
    color: #fff;

    &:hover {
      color: ${props => props.theme.color.pink};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 18px;
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
      <ContentWrapper>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </ContentWrapper>
      <HeroImage fluid={fluid} />
    </Wrapper>
  );
};

export default Hero;
