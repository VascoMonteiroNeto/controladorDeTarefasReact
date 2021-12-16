import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { Button, Card } from '@material-ui/core';

import useFetch from './useFetch'

export default function TarefaDetalhes() {
    const { id } = useParams()
    const navigate = useNavigate()

    const { info, pendente, erro } = useFetch('http://localhost:8000/tarefas/' + id)


    const deletaTarefa = (id) => {

        fetch('http://localhost:8000/tarefas/' + id, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
                navigate("/pendentes")
            }
        })
    }

    return (
        <div className='App'>
            {erro && <div>{erro}</div>}
            {pendente && <div>Carregando...</div>}
            {info &&
                <div className='listaDeTarefas'>
                    <Card variant='outlined' sx={{ padding: 2 }}>
                        <h4>Tarefa criada em {info.timestp}</h4>
                        <h2> Nome: {info.nome}; </h2>
                        <h3><p>Descrição: {info.tarefa} </p></h3>

                        <Button variant="contained"
                            color="primary"
                            style={{ width: 'auto' }}
                            onClick={() => deletaTarefa(info.id)}>
                            Finalizar
                        </Button>
                    </Card>
                    <Button variant="contained"
                        sx={{ margin: 2 }}
                        color="warning"
                        style={{ width: 'auto' }}
                        onClick={() => navigate("/pendentes")}>
                        Retornar ao quadro de tarefas
                    </Button>
                </div>}
        </div>
    )
}
