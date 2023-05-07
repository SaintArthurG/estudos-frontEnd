import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import apiDeputados from '@/services/apiDeputados'
import Cabecalho from '@/components/Cabecalho'


const id = (props) => {
  const deputado = props.deputado
  const despesas = props.despesas
  const profissao = props.profissao

  return (
    <>
      <Cabecalho />
      <Container>
      <Row>
        <Col md={3}>
          <Card className='mt-4'>
            <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
            <Card.Body>
              <Card.Title>{deputado.ultimoStatus.nome}</Card.Title>
              <p>Partido: {deputado.ultimoStatus.siglaPartido}</p>
              <p>UF Partido: {deputado.ultimoStatus.siglaUf} </p>
              <Link className='btn btn-danger' href={'/deputados'}> Voltar</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7}>
          <h2>Despesas: </h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>

              {despesas.map(item => (
                <tr>
                  <th>{item.dataDocumento}</th>
                  <th>{item.tipoDespesa}</th>
                  <th>{item.valorLiquido}</th>
                </tr>
              ))}
            </tbody>
          </Table>
          </Col>

          <Col md={1}>
            
            <h2>Profissões: </h2>
            <ul>
            {profissao.map(pr =>(
              <li>{pr.titulo != null ? pr.titulo : "Não informado"}</li>
            ))}
            </ul>
          </Col>
      </Row>
      </Container>
    </>
  )
}

export default id
export async function getServerSideProps(context) {

  const id = context.params.id

  const resultDeputados = await apiDeputados.get('/deputados/' + id)
  const deputado = resultDeputados.data.dados

  const resultDespesas = await apiDeputados.get('/deputados/' + id + '/despesas')
  const despesas = resultDespesas.data.dados

  const resultProfissao = await apiDeputados.get('/deputados/' + id + '/profissoes')
  const profissao = resultProfissao.data.dados

  return {
    props: { deputado, despesas, profissao },
  }
}