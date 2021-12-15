import React from 'react'
import { useParams } from 'react-router'
import { Button } from '@material-ui/core';

import useFetch from './useFetch'

export default function TarefaDetalhes() {
    const { id } = useParams()

    const { info, pendente, erro } = useFetch('http://localhost:8000/tarefas/' + id)


    const deletaTarefa = () =>{
        
    }

    return (
        <div className='App'>
            {erro && <div>{erro}</div>}
            {pendente && <div>Carregando...</div>}
            {info && 
            <div className='listaDeTarefas'>
                <h4>Criação {info.timestp}</h4>
                <h2> Nome: {info.nome}; </h2>
                <h3><p>Descrição: {info.tarefa} </p></h3>

                <Button variant="contained"
                    color="secondary"
                    style={{ width: 'auto' }}
                    onClick={() => deletaTarefa(info.id)}>
                    Finalizar
                </Button>
            </div>}
        </div>
    )
}
