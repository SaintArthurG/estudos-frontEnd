import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Imagens = (props) => {

    const size = props.size || 2
  return (
    <>
    {
        props.titulo &&
        <h2 className='mt-3'>{props.titulo}</h2>
    }
        <Row>
            {props.lista.map(im =>( 
                <Col md={size}>  
                 <Link href ={"/filmes/" + im.id}>
                    {
                        im[props.foto]
                        ?
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + im[props.foto]}/>
                        :
                        <Card.Img variant="top" src={"https://media.istockphoto.com/id/924949200/pt/vetorial/404-error-page-or-file-not-found-icon.jpg?s=170667a&w=0&k=20&c=GSfOtikQbfZBllL7OrY3zb6cP1Icjr9HmeHDmh0BB5I="}/>
                    }
                </Link>
                </Col>
                ))}
        </Row>
    </>
  )
}

export default Imagens