import { Typography } from '@material-ui/core'
import React from 'react'

import ListaDeTarefas from './ListaDeTarefas'
import useFetch from './useFetch'

export default function TarefasPendentes() {

  const { info, pendente, erro } = useFetch('http://localhost:8000/tarefas')


  return (
    <div className="App">
      <Typography variant='h4'>Tarefas pendentes</Typography>
      {erro && <div>{erro}</div>}
      {pendente && <div>Carregando...</div>}
      {info && <ListaDeTarefas infos={info}  />}
    </div>
  )
}
