import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  min-height: 600px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImageWrapepr = styled.div`
  position: absolute;
  height: 100%;
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
  background: ${props => props.theme.colors.primary.inkBlue};
  padding: 1.5rem 3rem;
  font-size: 26px;
  text-align: center;
  line-height: 3rem;
  color: #fff;
  margin-bottom: 1em;

  a {
    color: #fff;
  }
`;

const Sponsors = styled(Img)`
  width: 50%;
`;

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulHero {
          heroImage {
            fluid(maxWidth: 800, quality: 40) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          text {
            childMarkdownRemark {
              html
            }
          }
          sponsors {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `
  );

  const {
    contentfulHero: { heroImage, sponsors, text },
  } = data;

  console.log(sponsors);

  return (
    <Wrapper>
      <InnerWrapper>
        <Content dangerouslySetInnerHTML={{ __html: text.childMarkdownRemark.html }} />
        <Sponsors fluid={sponsors.fluid} objectFit />
      </InnerWrapper>
      <HeroImageWrapepr>
        <Img fluid={heroImage.fluid} />
      </HeroImageWrapepr>
    </Wrapper>
  );
};

export default Hero;
