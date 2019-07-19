import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

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
