import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineRollback } from 'react-icons/ai'
import { FiSave} from 'react-icons/fi'

const id = () => {
    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        if (query.id) {
            const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas'))
            const disciplina = disciplinas[query.id]
            for (let campo in disciplina) {
                setValue(campo, disciplina[campo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
        disciplinas.splice(query.id, 1, dados)
        window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
        push('/disciplina')
    }

    return (
        <Pagina titulo="Disciplina">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome da disciplina" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="curso">
                    <Form.Label>Curso</Form.Label>
                    <Form.Control type="text" placeholder="Digite o curso" {...register('curso')} />
                </Form.Group>
                <div className='text-center'>
                    <Button variant='success' onClick={handleSubmit(salvar)}>
                        <FiSave className='me-2' />
                        Salvar
                    </Button>
                    <Link className='ms-2 btn btn-danger' href="/cursos">
                        <AiOutlineRollback className='me-2' />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default id