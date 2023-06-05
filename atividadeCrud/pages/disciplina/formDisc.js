import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FiSave } from 'react-icons/fi'
import { BsArrowBarLeft } from 'react-icons/bs'

const formDisc = () => {

  const { push } = useRouter()
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
    disciplinas.unshift(dados)
    window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    push("/disciplina")
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
          <Form.Control type="text" placeholder="Curso" {...register('curso')} />
        </Form.Group>

        <div className='text-center'>
          <Button variant='success' onClick={handleSubmit(salvar)}>
            <FiSave className='me-2' />
            Salvar
          </Button>
          <Link className='ms-2' href={'/disciplina'}>
            <Button variant="danger">
              <BsArrowBarLeft className='me-2' />
              Voltar
            </Button>
          </Link>
        </div>
      </Form>
    </Pagina>
  )
}

export default formDisc