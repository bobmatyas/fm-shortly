import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/logo.svg';
import SocialList from '../components/social-list';

const fontSize = 1.6;

const StyledFooter = styled.footer`
  background-color: hsl(260, 8%, 14%);
  margin: 0;
  padding: 5%;
  text-align: center;
`;

const LogoHolder = styled.div`
  color: #fff;
  margin: 5.5rem 0;
`;

const List = styled.ul`
  font-size: ${fontSize}rem;
  color: hsl(0, 0%, 75%);
  list-style-type: none;
  margin: 0 0 2.2rem 0;
  padding: 0;

  li {
    margin: 1.5rem 0;
  }
`;

const FooterHeader = styled.h3`
  font-size: ${fontSize}rem;
  color: #fff;
  margin: 0
  padding: 3rem 0 1.5rem 0;
  text-align: center;
`;

const Attribution = styled.div`
  color: #fff;
  font-size: 11px; 
  margin: 5rem auto;
  text-align: center;

  a { 
    color: #fff; 
  }
  
  a:hover {
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <StyledFooter>

      <LogoHolder>
        <Logo />
      </LogoHolder>

      <FooterHeader>Features</FooterHeader>

      <List>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </List>


      <FooterHeader>Resources</FooterHeader>

      <List>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </List>

      <FooterHeader>Company</FooterHeader>

      <List>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </List>
 

      <SocialList />

      <Attribution>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.<br />
        Coded by <a href="https://www.bobmatyas.com">Bob Matyas</a>.
      </Attribution>

    </StyledFooter>
  );
}

export default Footer;