import React from 'react'
import {  Button, Typography } from '@material-ui/core'


export default function Navbar() {
    return (
        <nav className='navbar'>
            <Typography variant='h3'>Controlador de Tarefas</Typography>
            <div>
                <Button variant="text" className='navButtons' href='/criar'>Nova Tarefa</Button>
                <Button variant="outlined" className='navButtons' color='warning' href='/pendentes' >Tarefas Pendentes</Button>
            </div>
        </nav>
    )
}
