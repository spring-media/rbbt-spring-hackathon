import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  margin: 5rem 0;
`;

const Title = styled.h2`
  font-size: 45px;
  line-height: 1.06667;
  max-width: 52rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  padding-top: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  ${({ center }) =>
    center &&
    `
    text-align: center;
  `}

  &:before {
    content: '';
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.colors.secondary.whiteGrey};
  }
`;

const Section = ({ title, center, children }) => (
  <Wrapper>
    <Title center={center}>{title}</Title>
    <div>{children}</div>
  </Wrapper>
);

Section.propTypes = {
  children: PropTypes.isRequired,
  title: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

Section.defaultProps = {
  center: false,
};

export default Section;
