import React from 'react'
import styled from 'styled-components'
import { Column } from './Layout'

const Container = styled.header`
  width: 100%;
  display: flex;
  padding: 0.5rem 2rem;
  height: 4rem;
  width: 1020px;
`

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`

const NavItemContainer = styled.li`
  margin: auto;
`

const NavLink = styled.a`
  color: ${props => props.theme.bodyTextColor};
  text-decoration: none;

  &:hover,
  &:visited {
    text-decoration: none;
    border-bottom: 1px solid ${props => props.theme.bodyTextColor};
    color: ${props => props.theme.bodyTextColor};
  }
`

const Nav = () => (
  <NavList>
    <NavItem to="#what">What</NavItem>
    <NavItem to="#when">When</NavItem>
    <NavItem to="#where">Where</NavItem>
  </NavList>
)

const NavItem = ({ to, children }) => (
  <NavItemContainer>
    <NavLink href={to}>{children}</NavLink>
  </NavItemContainer>
)

export const Header = () => {
  return (
    <Container>
      <Column>{/* <h1>TIL DEATH DO US PART</h1> */}</Column>
      <Column>
        <Nav />
      </Column>
    </Container>
  )
}
