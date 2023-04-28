import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">IESB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
         <NavDropdown title="Filmes" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/filmes">Populares</NavDropdown.Item>
            <NavDropdown.Item href="/filmes/cartaz">Em cartaz</NavDropdown.Item>
            <NavDropdown.Item href="/filmes/lancamento">Lançamentos</NavDropdown.Item>
            <NavDropdown.Item href="/filmes/top">Top Rated</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar >
    </>
  )
}

export default Cabecalho