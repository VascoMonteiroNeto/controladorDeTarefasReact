import { Button } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

export default function ListaDeTarefas(props) {
    const infos = props.infos;

    return (
        <div>
            {
                infos.map((inf) => (
                    <div className='listaDeTarefas' key={inf.id}>

                        <h2> Nome: {inf.nome}; </h2>

                        <Link to={`/pendentes/${inf.id}`}>
                            <Button variant="contained"
                                color="primary"
                                style={{ width: 'auto' }}>
                                Detalhes
                            </Button>
                        </Link>

                        <br />
                    </div>
                ))
            }
        </div >
    )
}
