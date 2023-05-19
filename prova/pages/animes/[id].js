import { Pagina } from '@/Components/Pagina';
import apiAnime from '@/services/apiAnime';
import Link from 'next/link';
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';

const id = (props) => {
    const resultados = props.resultados
    return (
        <>
            <Pagina titulo={resultados.title}>
                <Row>
                    <Col md={3}>
                        <Card border="danger">
                            <Card.Header className='bg-danger text-light'>Foto</Card.Header>
                            <Card.Img src={resultados.images.webp.image_url} />
                        </Card>
                        <br/>
                        <Link href="/animes" ><Button className='bg-danger'> Voltar </Button></Link>
                    </Col>
                    <Col md={9} className='mb-5'>
                        <Card border="danger">
                            <Card.Header className='bg-danger text-light'> {resultados.title}</Card.Header>
                            <Card.Body bg="light">
                                <p> <strong> Episódios: </strong> {resultados.episodes} </p>
                                <p> <strong> Status: </strong> {resultados.status} </p>
                                <p> <strong> Ano: </strong> {resultados.year} </p>
                                <p> <strong> Duração: </strong> {resultados.duration} </p>
                                <p> <strong> Score: </strong> {resultados.score} </p>
                                {resultados.synopsis} 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Pagina>
        </>
    )
}

export default id

export async function getServerSideProps(context) {
    const id = context.params.id;

    const anime = await apiAnime.get("/anime/" + id)
    const resultados = anime.data.data

    return {
        props:
            { resultados },
    }
}