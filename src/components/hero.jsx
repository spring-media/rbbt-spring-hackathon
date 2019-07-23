import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
  margin: 0 auto;
  margin-top: 80px;
  max-width: ${props => props.theme.layout.medium};
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
  background: ${props => props.theme.colors.primary.green};
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
    color: ${props => props.theme.colors.primary.yellow};
  }
`;

const Sponsors = styled(Img)`
  width: 50%;
  margin: 0 auto;
  margin-top: 3rem;
`;

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
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
          sponsors {
            fluid(maxWidth: 300, quality: 80) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  const {
    contentfulHero: { heroImage, sponsors, text },
  } = data;

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Content dangerouslySetInnerHTML={{ __html: text.childMarkdownRemark.html }} />
        </InnerWrapper>
        <HeroImage fluid={heroImage.fluid} />
      </Wrapper>
      <Sponsors fluid={sponsors.fluid} />
    </>
  );
};

export default Hero;
