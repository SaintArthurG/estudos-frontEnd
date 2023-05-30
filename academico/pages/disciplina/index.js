import Pagina from '@/components/Pagina'
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsTrashFill, BsPencil } from 'react-icons/bs'

const Disciplinas = () => {

    const [disciplinas, setDisciplinas] = useState([])


    useEffect(() => {
        getAll()
        
    },[])
    
        function getAll(){
        axios.get('/api/disciplinas').then(resultado =>{
        setDisciplinas(resultado.data)
    })
        }
        function excluir(id){
            axios.delete('/api/disciplinas/' + id)
        }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('api/disciplinas/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="Disciplinas">

            <Link href="/disciplina/form" className='mb-2 btn btn-primary'>
                <AiFillPlusCircle className='m-1' />
                Novo
            </Link>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Deletar</th>
                        <th>Nome</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map(item => (
                        <tr key={item.id}>
                            <td><BsTrashFill onClick={() => excluir(item.id)} className='text-warning' />
                            <Link href={'/disciplinas/' + item.id}> 
                            <BsPencil/> 
                            </Link>
                            </td>
                            <td>{item.id}</td>
                            <td>{item.curso}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>

    )
}

export default Disciplinas