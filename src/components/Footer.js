import { Socialicons } from './Socialicons';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';


import React from 'react'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="../images/logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, concentetur adispicning elit,
              sed do eoiudosm tempor incidinant ut labore et dolore magna alisaw
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <Socialicons />
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}