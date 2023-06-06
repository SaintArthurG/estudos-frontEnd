const cursoValidator = {
    nome:  {
        required: 'Campo Obrigatório',
        minLength: {
          value: 3,
          message: 'O mínimo é 3',
        },
        maxLength: {
          value: 10,
          message: 'O máximo é 10'
        },
      },

      duracao: {
        required: 'Campo Obrigatório',
        minLength: {
          value: 3,
          message: 'O mínimo é 3',
        },
        maxLength: {
          value: 10,
          message: 'O máximo é 10'
        },
      },

      modalidade: {
        required: 'Campo Obrigatório',
        minLength: {
          value: 3,
          message: 'O mínimo é 3',
        },
        maxLength: {
          value: 10,
          message: 'O máximo é 10'
        },
      }
    
}

export default cursoValidator