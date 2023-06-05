import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="info">
        <Container>
          <Navbar.Brand href="/">Acadêmico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link href="/disciplina">Disciplinas</Nav.Link>
            <Nav.Link href="/professores">Professores</Nav.Link>
            <Nav.Link href="/alunos">Alunos</Nav.Link>
            <Nav.Link href="/salas">Salas</Nav.Link>
            <Nav.Link href="/semestres">Semestres</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho