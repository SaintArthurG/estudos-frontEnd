import Pagina from '@/Components/Pagina';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsTrashFill, BsPencil } from 'react-icons/bs'

const index = () => {

    const [professores, setProfessores] = useState([])


    useEffect(() => {
        setProfessores(getAll())

    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('professores')) || []
    }
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('professores', JSON.stringify(itens))
            setProfessores(itens)
        }
    }

    return (
        <Pagina titulo="Professores">

            <Link href="/professores/formProf" className='mb-2 btn btn-primary'>
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
                        <th>Salário</th>
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
                    {professores.map((item, indice) => (                     
                        <tr key={indice}>
                            <td><BsTrashFill onClick={() => excluir(indice)} className='text-warning' />
                            <Link href={'/professores/' + indice}> 
                            <BsPencil/> 
                            </Link>
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>
                            <td>{item.matricula}</td>
                            <td>{item.salario}</td>
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