import React from 'react'
import { Pagina } from '@/components/Pagina'
import apiFilmes from '../services/apiFilmes'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = (props) => {
  return (
    <>
      <Pagina titulo={props.filme.title}>

        <Row>
          <Col md={3}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + props.filme.poster_path} />
          </Col>

          <Col md={9}>
            <p><strong>Orçamento: </strong>{props.filme.budget}</p>
            <p><strong>Data de Lançamento: </strong>{props.filme.release_date}</p>
            <p><strong>Duração: </strong>{props.filme.runtime}</p>
            <p><strong>Nota: </strong>{props.filme.vote_average}</p>
            <div>
              <strong>Gêneros: </strong>
              <ul>
                {props.filme.genres.map(item => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
            <p>{props.filme.overview}</p>
          </Col>
        </Row>
              <h2>Atores: </h2>
         <Row>
          {props.atores.map(item => (
            <Col md={2} className="mb-3">
             <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + item.profile_path} title={item.name} />
            </Col>
          ))}
        </Row>

      </Pagina>
    </>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiFilmes.get('/movie/' + id)
  const filme = resultado.data

  const resAtores = await apiFilmes.get('/movie/' + id + '/credits')
  const atores = resAtores.data.cast

  return {
    props: {filme, atores}, // will be passed to the page component as props
  }
}