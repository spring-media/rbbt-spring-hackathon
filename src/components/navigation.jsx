import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '../images/spring-logo.png';

const Wrapper = styled.div`
  height: 80px;
  top: 0;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: space-between;
  max-width: ${props => props.theme.layout.small};
`;

const Logo = styled.div`
  width: 140px;
  height: 80px;
  align-self: flex-end;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;

  li {
    display: inline-flex;
    margin: 0;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;

  padding: 0.5rem;
`;

const SiteLink = ({ to, children }) => {
  return (
    <li>
      <StyledLink href={to}>{children}</StyledLink>
    </li>
  );
};

const Navigation = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>
          <Link to="/">
            <img src={logo} alt="Spring Media" />
          </Link>
        </Logo>
        <LinkList>
          <SiteLink to="/#">Home</SiteLink>
          <SiteLink to="/#about">About</SiteLink>
          <SiteLink to="/#location">Location</SiteLink>
          <SiteLink to="/#schedule">Schedule</SiteLink>
          <SiteLink to="/#register">Register</SiteLink>
          <SiteLink to="/#prizes">Prizes</SiteLink>
          <SiteLink to="/#partners">Partners</SiteLink>
          <SiteLink to="/#contact">Contact</SiteLink>
        </LinkList>
      </Nav>
    </Wrapper>
  );
};

SiteLink.defaultProps = {
  to: '',
  children: PropTypes.children,
};

SiteLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};

export default Navigation;
