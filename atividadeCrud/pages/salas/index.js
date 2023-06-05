import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsTrashFill, BsPencil } from 'react-icons/bs'

const index = () => {

    const [salas, setSalas] = useState([])


    useEffect(() => {
        setSalas(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('salas')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('salas', JSON.stringify(itens))
            setSalas(itens)
        }
    }

    return (
        <Pagina titulo="Salas">
            <Link href="/salas/formSala" className='mb-2 btn btn-primary'>
                <AiFillPlusCircle className='m-1' />
                Novo
            </Link>
            <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                        <th>Deletar</th>
                        <th>Nome</th>
                        <th>Capacidade</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {salas.map((item, indice) => (
                        <tr key={indice}>
                            <td><BsTrashFill onClick={() => excluir(indice)} className='text-warning' />
                                <Link href={'/salas/' + indice}>
                                    <BsPencil />
                                </Link>
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.capacidade}</td>
                            <td>{item.tipo}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}
export default index