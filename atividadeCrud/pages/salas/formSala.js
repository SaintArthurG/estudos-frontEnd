import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FiSave } from 'react-icons/fi'
import {AiOutlineRollback} from 'react-icons/ai'

const Forms = () => {

  const { push } = useRouter()
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    const salas = JSON.parse(window.localStorage.getItem('salas')) || []
    salas.unshift(dados)
    window.localStorage.setItem('salas', JSON.stringify(salas))
    push('/salas')

  }

  return (
    <Pagina titulo="Salas">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite a sala" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade</Form.Label>
          <Form.Control type="text" placeholder="Digite a capacidade" {...register('capacidade')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo</Form.Label>
          <Form.Control type="text" placeholder="Digite o tipo" {...register('tipo')} />
        </Form.Group>

        <div className='text-center'>
          <Button variant='success' onClick={handleSubmit(salvar)}>
            <FiSave className='me-2' />
            Salvar
          </Button>
          <Link className='ms-2 btn btn-danger' href="/salas">
            <AiOutlineRollback className='me-2'/>
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  )
}

export default Forms