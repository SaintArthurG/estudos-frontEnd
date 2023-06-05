import Pagina from '@/Components/Pagina';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsTrashFill, BsPencil } from 'react-icons/bs'

const index = () => {

    const [disciplinas, setDisciplinas] = useState([])


    useEffect(() => {
        setDisciplinas(getAll())
        
    },[])
    
        function getAll(){
        return JSON .parse(window.localStorage.getItem('disciplinas')) || []
    }
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
           const itens = getAll()
           itens.splice(id, 1)
           window.localStorage.setItem('disciplinas', JSON.stringify(itens))
           setDisciplinas(itens)
        }
    }

    return (
        <Pagina titulo="Disciplinas">

            <Link href="/disciplina/formDisc" className='mb-2 btn btn-primary'>
                <AiFillPlusCircle className='m-1' />
                Novo
            </Link>

            <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                        <th>Deletar</th>
                        <th>Nome</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map((item, indice)=> (
                        <tr key={indice}>
                            <td><BsTrashFill onClick={() => excluir(indice)} className='text-warning' />
                            <Link href={'/disciplina/' + indice}> 
                            <BsPencil/> 
                            </Link>
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.curso}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>

    )
}

export default index