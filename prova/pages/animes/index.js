import React from 'react'
import { Pagina } from '@/Components/Pagina'
import apiAnime from '@/services/apiAnime'
import { Button, Col, Container, Table } from 'react-bootstrap'
import Link from 'next/link'

const index = (props) => {
    const tabela = props.tabela
  return (
    <>
    <Pagina titulo="Animes">
    <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Detalhes</th>
                <th>Titulo</th>
                <th>Duração</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>

              {tabela.map(item => (
                <tr>
                  <th><Link href={"/animes/" + item.mal_id} > <Button className='bg-danger mb-2 ms-5 ' > Ver mais... </Button> </Link></th>  
                  <th>{item.title}</th>
                  <th>{item.duration}</th>
                  <th>{item.year}</th>
                </tr>
              ))}
            </tbody>
          </Table>
          </Col>
    </Pagina> 
    </>
    )
}

export default index

export async function getServerSideProps(context) {
    const resultado = await apiAnime.get("/anime")
    const tabela = resultado.data.data

    return {
        props: { tabela },
    }
}