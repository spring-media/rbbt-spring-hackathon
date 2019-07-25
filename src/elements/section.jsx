import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  margin: 5rem 0;
`;

const Title = styled.h3`
  font-size: 45px;
  max-width: ${props => props.theme.layout.small};
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
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
    background: ${props => props.theme.color.lightGrey};
  }
`;

// eslint-disable-next-line react/prop-types
const Section = ({ title, center, children, id }) => (
  <Wrapper id={id}>
    <Title center={center}>{title}</Title>
    <div>{children}</div>
  </Wrapper>
);

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
  center: PropTypes.bool,
  id: PropTypes.string,
};

Section.defaultProps = {
  center: false,
  id: '',
};

export default Section;
