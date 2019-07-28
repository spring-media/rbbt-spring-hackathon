import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '../images/spring-logo.gif';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', { header: '[data-scroll-header]' });
}

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  margin: auto;
  top: 0;
  background: ${props => props.theme.color.lightGrey};
  z-index: 2;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 0 0.5em;
  }
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

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 0 0.5em;
  }
`;

const Logo = styled.div`
  height: 80px;
  align-self: flex-end;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 140px;
  }
`;

const MenuLinks = styled.ul`
  list-style: none;
  margin: 0;

  li {
    display: inline-flex;
    margin: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;

    &.active {
      border-top: 3px solid ${props => props.theme.color.inkBlue};
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-content: center;
      width: 100%;
      height: 100vh;
      bottom: -100vh;
      padding-top: 3em;
      padding-left: 4em;
      background: #fff;
      left: 0;
    }
  }
`;

const StyledLink = styled.a`
  font-weight: 700;
  color: #000;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  text-decoration: none;

  &:before {
    background-color: ${props => props.theme.color.neonGreen};
    top: 2em;
    content: ' ';
    height: 3px;
    left: 50%;
    right: 50%;
    position: absolute;
    transition: left 0.3s linear, right 0.3s linear;
  }

  &:hover {
    color: #000;

    &:before {
      left: 0;
      right: 0;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    &.active {
      margin-bottom: 0.5rem;
    }
  }
`;

const Hamburger = styled.a`
  position: relative;
  width: 35px;
  height: 28px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 6px;
    width: 100%;
    background: black;
  }

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;

const Header = ({ menuLinks }) => {
  const [showMenu, setShowMenu] = useState(false);

  const activeMenu = showMenu ? 'active' : '';
  const activeBurger = showMenu ? 'active' : '';

  return (
    <HeaderWrapper data-scroll-header>
      <Wrapper>
        <Nav>
          <Logo>
            <Link to="/">
              <img src={logo} alt="Spring Media" />
            </Link>
          </Logo>
          <Hamburger onClick={() => setShowMenu(!showMenu)} className={`${activeBurger}`}>
            <span />
            <span />
            <span />
          </Hamburger>
          <MenuLinks className={`${activeMenu}`}>
            {menuLinks.map(link => (
              <li>
                <StyledLink
                  href={link.to}
                  key={link.to}
                  className={`${activeMenu}`}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {link.name}
                </StyledLink>
              </li>
            ))}
          </MenuLinks>
        </Nav>
      </Wrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  menuLinks: PropTypes.array.isRequired,
};

export default Header;
