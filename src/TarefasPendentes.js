import React from 'react'
import { useState, useEffect } from 'react'

import ListaDeTarefas from './ListaDeTarefas'
import useFetch from './useFetch'

export default function TarefasPendentes() {

  const { info, pendente, erro } = useFetch('http://localhost:8000/tarefas')

  const deletaTarefa = (id) => {
    const tarefasAtt = info.filter(item => item.id !== id)
    info = tarefasAtt
  }

  return (
    <div className="App">
      <h2>Tarefas pendentes</h2>
      {erro && <div>{erro}</div>}
      {pendente && <div>Carregando...</div>}
      {info && <ListaDeTarefas infos={info} deletaTarefa={deletaTarefa} />}
    </div>
  )
}
