import Pagina from '@/components/Pagina'
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
    axios.post('/api/disciplinas', dados)
  }

  return (
    <Pagina titulo="Disciplina">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do curso" {...register('nome')} />
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
          <Link className='ms-2 btn btn-danger' href="/disciplina">
            <AiOutlineRollback className='me-2'/>
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  )
}

export default Forms