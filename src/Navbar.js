import React from 'react'
import {  Button } from '@material-ui/core'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <h2>Controlador de Tarefas</h2>
            <div>
                <Button variant="contained" color='secondary' href='/criar'>Nova Tarefa</Button>
                <Button variant="contained" href='/pendentes' >Tarefas Pendentes</Button>
            </div>
        </nav>
    )
}
