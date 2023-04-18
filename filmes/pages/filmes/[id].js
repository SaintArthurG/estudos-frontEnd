import React from 'react'
import { Pagina } from '@/components/Pagina'
import apiFilmes from '../services/apiFilmes'

const Detalhes = (props) => {
    return (
        <>
            <Pagina titulo="Filmes">
                Detalhes
            </Pagina>
        </>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

  const id = context.params.id  

  const resultado = await apiFilmes.get('/movie/' + id)
  const filme = resultado.data

  return {
    props: {filme}, // will be passed to the page component as props
  }
}