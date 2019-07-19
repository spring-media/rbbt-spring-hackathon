import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavBar = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: ${props => props.theme.layout.medium};
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const Link = styled.a`
  text-decoration: none;
  color: black;
  padding: 0.5rem;

  .active {
    background: red;
  }
`;

const SiteLink = ({ to, children }) => {
  return (
    <li>
      <Link href={to}>{children}</Link>
    </li>
  );
};

const Navigation = () => {
  return (
    <NavBar>
      <Nav>
        <Logo>
          <img src="https://www.placecage.com/200/60" alt="" />
        </Logo>
        <LinkList>
          <SiteLink to="/">Home</SiteLink>
          <SiteLink to="#about">About</SiteLink>
          <SiteLink to="#location">Location</SiteLink>
          <SiteLink to="#schedule">Schedule</SiteLink>
          <SiteLink to="#register">Register</SiteLink>
          <SiteLink to="#prizes">Prizes</SiteLink>
          <SiteLink to="#partners">Partners</SiteLink>
          <SiteLink to="#contact">Contact</SiteLink>
        </LinkList>
      </Nav>
    </NavBar>
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
