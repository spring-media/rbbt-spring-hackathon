/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Link = styled.a`
  margin: 1rem;
`;

const Fig = styled.figure`
  position: relative;
  height: 150px;
  overflow: hidden;
  display: flex;
  padding: 1rem;
  margin: 0;
  box-shadow: ${props => props.theme.shadow.base};
  transition: ${props => props.theme.transition.smoothe};

  img {
    object-fit: contain;
    margin-bottom: 0;
  }

  &:hover {
    box-shadow: ${props => props.theme.shadow.hover};
  }
`;

const renderLogo = (title, description, fluid) => (
  <Link href={description} target="_blank" rel="noopener noreferrer" title={title} key={description}>
    <Fig className="image">
      <img src={fluid.src} />
    </Fig>
  </Link>
);

const LogoLinks = ({ content: { logos } }) => (
  <Wrapper>{logos.map(item => renderLogo(item.title, item.description, item.fluid))}</Wrapper>
);

export default LogoLinks;
