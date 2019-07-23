/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  margin-top: 2em;
  padding-top: 3em;

  &:before {
    content: '';
    position: absolute;
    width: 70%;
    height: 2px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: ${props => props.theme.colors.primary.inkBlue};
  }
`;

const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  padding-top: 1em;
`;

const Section = props => {
  const { title, children } = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>{children}</div>
    </Wrapper>
  );
};

export default Section;
