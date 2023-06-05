import Cabecalho from '@/Components/Cabecalho'
import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineRollback } from 'react-icons/ai'
import { FiSave } from 'react-icons/fi'

const id = () => {
    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        if (query.id) {
            const alunos = JSON.parse(window.localStorage.getItem('alunos'))
            const aluno = alunos[query.id]
            for (let campo in aluno) {
                setValue(campo, aluno[campo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
        alunos.splice(query.id, 1, dados)
        window.localStorage.setItem('alunos', JSON.stringify(alunos))
        push('/alunos')
    }

    return (
        <>
            <Cabecalho />
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome" {...register('nome')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Digite o CPF" {...register('cpf')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="matricula">
                        <Form.Label>Matrícula</Form.Label>
                        <Form.Control type="text" placeholder="Digite a matrícula" {...register('matricula')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="salario">
                        <Form.Label>Salário</Form.Label>
                        <Form.Control type="text" placeholder="Digite o salário" {...register('salario')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Digite o Email" {...register('email')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" placeholder="Digite o Telefone" {...register('telefone')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cep">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="text" placeholder="Digite o CEP" {...register('cep')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="logradouro">
                        <Form.Label>Logradouro</Form.Label>
                        <Form.Control type="text" placeholder="Digite o logradouro" {...register('logradouro')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="complemento">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control type="text" placeholder="Digite o complemento" {...register('complemento')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="numero">
                        <Form.Label>Número</Form.Label>
                        <Form.Control type="number" placeholder="Digite o número" {...register('numero')} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="bairro">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control type="text" placeholder="Digite o bairro" {...register('bairro')} />
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant='success' onClick={handleSubmit(salvar)}>
                            <FiSave className='me-2' />
                            Salvar
                        </Button>
                        <Link className='ms-2 btn btn-danger' href="/alunos">
                            <AiOutlineRollback className='me-2' />
                            Voltar
                        </Link>
                    </div>
                </Form>
            </Container>
        </>
    )
}

export default id