import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid black;
  z-index: 1;
`;

const Header = ({ children }) => (
  <Container>
    <div>{children}</div>
  </Container>
);

Header.propTypes = {
  children: PropTypes.element,
};

Header.defaultProps = {
  children: '',
};

export default Header;
