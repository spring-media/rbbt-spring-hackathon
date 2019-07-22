/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ImageContainer = styled.section`
  width: 30%;
`;

const Schedule = ({ content: { firstDay, secondDay } }) => (
  <Wrapper>
    <ImageContainer>
      <h3>{firstDay.title}</h3>
      <Img fluid={firstDay.fluid} />
    </ImageContainer>
    <ImageContainer>
      <h3>{secondDay.title}</h3>
      <Img fluid={secondDay.fluid} />
    </ImageContainer>
  </Wrapper>
);

export default Schedule;
