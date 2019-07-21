/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Container from './container';

const ImageContainer = styled.section`
  /* display: flex; */
`;

const Schedule = ({ content: { sectionTitle, firstDay, secondDay } }) => {
  return (
    <Container type="small">
      <h3>{sectionTitle}</h3>
      <ImageContainer>
        <h3>{firstDay.title}</h3>
        <Img fluid={firstDay.fluid} />
        <h3>{secondDay.title}</h3>
        <Img fluid={secondDay.fluid} />
      </ImageContainer>
    </Container>
  );
};

export default Schedule;
