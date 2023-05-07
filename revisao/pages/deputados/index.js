import React from 'react'
import Cabecalho from '@/components/Cabecalho'
import apiDeputados from '@/services/apiDeputados'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const index = (props) => {
    const deputados = props.deputados
    return (
        <>
            <Cabecalho />
            <Container>
                <h1>Deputados: </h1>
                <Row md={4}>
                    {deputados.map(item => (
                        <Col>
                            <Card>
                                <Link href={'/deputados/' + item.id}>
                                    <Card.Img variant="top" src={item.urlFoto} />
                                </Link>
                                <Card.Body>
                                    <Card.Title><p><strong>{item.nome}</strong></p></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container >
        </>
    )
}

export default index
export async function getServerSideProps(context) {

    const resultado = await apiDeputados.get('/deputados')
    const deputados = resultado.data.dados

    return {
        props: { deputados },
    }
}