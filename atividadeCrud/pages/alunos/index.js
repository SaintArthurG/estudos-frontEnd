import Pagina from '@/Components/Pagina';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsTrashFill, BsPencil } from 'react-icons/bs'

const index = () => {

    const [alunos, setAlunos] = useState([])


    useEffect(() => {
        setAlunos(getAll())

    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('alunos')) || []
    }
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('alunos', JSON.stringify(itens))
            setAlunos(itens)
        }
    }

    return (
        <Pagina titulo="Alunos">

            <Link href="/alunos/formAln" className='mb-2 btn btn-primary'>
                <AiFillPlusCircle className='m-1' />
                Novo
            </Link>

            <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                        <th>Deletar</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Matrícula</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Complemento</th>
                        <th>Número</th>
                        <th>Bairro</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((item, indice) => (                     
                        <tr key={indice}>
                            <td><BsTrashFill onClick={() => excluir(indice)} className='text-warning' />
                            <Link href={'/alunos/' + indice}> 
                            <BsPencil/> 
                            </Link>
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>
                            <td>{item.matricula}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>{item.cep}</td>
                            <td>{item.logradouro}</td>
                            <td>{item.complemento}</td>
                            <td>{item.numero}</td>
                            <td>{item.bairro}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>

    )
}

export default index