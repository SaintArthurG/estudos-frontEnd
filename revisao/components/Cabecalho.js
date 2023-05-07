import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">IESB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/deputados">Deputados</Nav.Link>
        </Nav>
      </Container>
    </Navbar >
    </>
  )
}

export default Cabecalho