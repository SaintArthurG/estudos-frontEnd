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
      const semestres = JSON.parse(window.localStorage.getItem('semestres'))
      const semestre = semestres[query.id]
      for (let campo in semestre) {
        setValue(campo, semestre[campo])
      }
    }
  }, [query.id])

  function salvar(dados) {
    const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.splice(query.id, 1, dados)
    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push('/semestres')

  }

  return (
    <Pagina titulo="Semestres">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o semestre" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dateI">
          <Form.Label>Data inicial</Form.Label>
          <Form.Control type="text" placeholder="Digite a data inicial" {...register('dateI')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dateF">
          <Form.Label>Data final</Form.Label>
          <Form.Control type="text" placeholder="Digite a data final" {...register('dateF')} />
        </Form.Group>

        <div className='text-center'>
          <Button variant='success' onClick={handleSubmit(salvar)}>
            <FiSave className='me-2' />
            Salvar
          </Button>
          <Link className='ms-2 btn btn-danger' href="/semestres">
            <AiOutlineRollback className='me-2' />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  )
}

export default Forms