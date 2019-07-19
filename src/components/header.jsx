import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid black;
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
