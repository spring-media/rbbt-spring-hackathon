/* eslint-disable react/prop-types */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 30%;
  margin: 1rem;
  box-shadow: ${props => props.theme.shadow.base};
  transition: ${props => props.theme.transition.smoothe};

  &:hover {
    box-shadow: ${props => props.theme.shadow.hover};
  }
`;

const ImageWrapper = styled.figure`
  overflow: hidden;
  object-fit: contain;
  padding: 0;
  max-height: 320px;
`;

const Info = styled.div`
  padding: 0 1rem;

  p {
    &:first-child {
      font-weight: bold;
      font-size: 18px;
      color: ${props => props.theme.color.inkBlue};
    }
  }
`;

const renderJury = (title, fluid, description) => (
  <Card key={title}>
    <ImageWrapper>
      <Img fluid={fluid} />
    </ImageWrapper>
    <Info>
      <p>{title}</p>
      <p>{description}</p>
    </Info>
  </Card>
);

const Jury = () => {
  const data = useStaticQuery(graphql`
    query JuryQuery {
      contentfulPrizes {
        jury {
          title
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyContentfulFluid_tracedSVG
          }
          description
        }
      }
    }
  `);
  return (
    <Wrapper>{data.contentfulPrizes.jury.map(item => renderJury(item.title, item.fluid, item.description))}</Wrapper>
  );
};

export default Jury;
