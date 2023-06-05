import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FiSave } from 'react-icons/fi'
import { AiOutlineRollback } from 'react-icons/ai'

const Forms = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (query.id) {
      const cursos = JSON.parse(window.localStorage.getItem('cursos'))
      const curso = cursos[query.id]
      for (let campo in curso) {
        setValue(campo, curso[campo])
      }
    }
  }, [query.id])

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.splice(query.id, 1, dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')

  }

  return (
    <Pagina titulo="Curso">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do curso" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Duração</Form.Label>
          <Form.Control type="text" placeholder="Digite a duração" {...register('duracao')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade</Form.Label>
          <Form.Control type="text" placeholder="Digite a modalidade" {...register('modalidade')} />
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