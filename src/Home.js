import Button from '@material-ui/core/Button';
import { Card, Grid, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
// import { useSnackbar } from 'notistack';


import './App.css';

function Home() {

  const [nomeTemp, setNomeTemp] = useState('')
  const [tarefaTemp, setTarefaTemp] = useState('')
  const [id, setId] = useState(0)


  const handleClick = (nomeTemp, tarefaTemp, id) => {

    var timeStamp = new Date()

    var novaTarefa = {
      timestp: timeStamp.toLocaleDateString() + '-' + timeStamp.toLocaleTimeString(),
      // id: id,
      nome: nomeTemp,
      tarefa: tarefaTemp
    }

    fetch('http://localhost:8000/tarefas',
      {
        method: 'POST',
        body: JSON.stringify(novaTarefa),
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        if (res.ok) {
          console.log('Sucesso')
        }
      })

    setId(id + 1)
    setNomeTemp('')
    setTarefaTemp('')
  }

  return (
    <div className="App">

      <Typography variant='h4'>Adicionar uma nova tarefa</Typography>

      <form onSubmit={() => handleClick(nomeTemp, tarefaTemp, id)}>

        <Card variant="outlined" sx={{ padding: 2 }}>
          <Grid container>
            <TextField className='textfields' sx={{ marginBottom: 2 }}
              value={nomeTemp}
              label="Nome"
              fullWidth
              required
              onChange={(e) => setNomeTemp(e.target.value)}
              variant="outlined" />

            <br />

            <TextField className='textfields' sx={{ marginBottom: 2 }}
              value={tarefaTemp}
              label="Tarefa"
              fullWidth
              required
              multiline rows={3}
              onChange={(e) => setTarefaTemp(e.target.value)}
              variant="outlined" />
            <br />

            <Button variant="contained" fullWidth type='submit' color="primary">
              Salvar
            </Button>
          </Grid>
        </Card>
      </form>
      <br />


      <br />
    </div>
  );
}

export default Home;
