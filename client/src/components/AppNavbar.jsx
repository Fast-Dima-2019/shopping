import React from 'react'
import {
  Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink
} from 'reactstrap'

export default class AppNavbar extends React.Component{
  state = { isOpen: false }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
        <Navbar color='info' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>Список покупок</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='https://github.com/Fast-Dima-2019/shopping'>Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
    )
  }
}