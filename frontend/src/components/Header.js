import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar className='navbar-dark bg-primary' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='#home'>Grill Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> Ingresar
              </Nav.Link>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i> Carrito
              </Nav.Link>
              {/* <NavDropdown title='Categorias' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Categoria 1
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Categoria 2
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                Categoria 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Categoria Separada
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
