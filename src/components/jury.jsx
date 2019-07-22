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
  margin: 0.5rem;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadow.base};
  transition: ${props => props.theme.transition.card};

  &:hover {
    box-shadow: ${props => props.theme.shadow.hover};
  }
`;

const ImageWrapper = styled.figure`
  overflow: hidden;
  object-fit: contain;
  padding: 0;

  img {
    border-radius: 5px 5px 0 0;
  }
`;

const Info = styled.div`
  padding: 0.5rem;

  p {
    &:first-child {
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

const renderJury = (title, fluid, description) => (
  <Card>
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