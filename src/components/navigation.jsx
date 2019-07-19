import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
`;

const Navigation = () => {
  return (
    <Nav>
      <a to="/foo">Foo</a>
      <a to="/bar">Bar</a>
      <a to="/baz">Baz</a>
    </Nav>
  );
};

export default Navigation;
