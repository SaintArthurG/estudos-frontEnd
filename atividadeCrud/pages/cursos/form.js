import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FiSave } from 'react-icons/fi'
import { AiOutlineRollback } from 'react-icons/ai'
import cursoValidator from '@/validators/cursoValidator'

const Forms = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm();

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.unshift(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')

  }

  return (
    <Pagina titulo="Curso">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text"  placeholder="Digite o nome do curso" {...register('nome', cursoValidator.nome)} />
          {
            errors.nome &&
            <p className='text-danger mt-1'>{errors.nome.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Duração</Form.Label>
          <Form.Control type="text" placeholder="Digite a duração" {...register('duracao', cursoValidator.duracao)} />
          {
            errors.duracao &&
            <p className='text-danger mt-1'>{errors.duracao.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade</Form.Label>
          <Form.Control type="number" placeholder="Digite a modalidade" {...register('modalidade', cursoValidator.modalidade)} />
          {
            errors.modalidade &&
            <p className='text-danger mt-1'>{errors.modalidade.message}</p>
          }
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

export default Forms