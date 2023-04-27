import React from 'react'
import { Pagina } from '@/components/Pagina'
import apiFilmes from '../services/apiFilmes'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const lancamento = (props) => {
  return (
    <>
      <Pagina titulo="Lançamentos">
        <Row md={4}>
          {props.filmes.map(filme => (
            <Col>
              <Card>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + filme.backdrop_path} />
                <Card.Body>
                  <Card.Title>{filme.title}</Card.Title>
                  <p>
                    Lançamento: {filme.release_date}
                  </p>
                  <p>
                    Nota: {filme.vote_average}
                  </p>
                  <p>
                    <Link className='btn btn-danger' href={"/filmes/" + filme.id}> Detalhes</Link>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Pagina>

    </>
  )
}

export default lancamento

  export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get("/movie/upcoming?language=pt-BR'")
  const filmes = resultado.data.results
  return {
    props: { filmes },
  }
}
