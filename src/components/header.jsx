import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '../images/media-hackday-logo.png';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: ${props => props.theme.colors.primary.inkBlue};
  box-shadow: ${props => props.theme.shadow.base};
  z-index: 2;
`;

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
  align-items: center;
  justify-content: space-between;
  max-width: ${props => props.theme.layout.medium};
`;

const Logo = styled.div`
  width: 200px;
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
  color: #fff;
  padding: 0.5rem;
`;

const SiteLink = ({ to, children }) => (
  <li>
    <StyledLink href={to}>{children}</StyledLink>
  </li>
);

const Header = () => (
  <HeaderWrapper>
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
  </HeaderWrapper>
);

SiteLink.defaultProps = {
  to: '',
  children: PropTypes.children,
};

SiteLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};

export default Header;
