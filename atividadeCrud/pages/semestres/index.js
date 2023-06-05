import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsTrashFill, BsPencil } from 'react-icons/bs'

const index = () => {

    const [semestres, setSemestres] = useState([])


    useEffect(() => {
        setSemestres(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('semestres')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('semestres', JSON.stringify(itens))
            setSemestres(itens)
        }
    }

    return (
        <Pagina titulo="Semestres">
            <Link href="/semestres/formSem" className='mb-2 btn btn-primary'>
                <AiFillPlusCircle className='m-1' />
                Novo
            </Link>
            <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                        <th>Deletar</th>
                        <th>Nome</th>
                        <th>Data de Inicio</th>
                        <th>Data final</th>
                    </tr>
                </thead>
                <tbody>
                    {semestres.map((item, indice) => (
                        <tr key={indice}>
                            <td><BsTrashFill onClick={() => excluir(indice)} className='text-warning' />
                                <Link href={'/semestres/' + indice}>
                                    <BsPencil />
                                </Link>
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.dateI}</td>
                            <td>{item.dateF}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}
export default index