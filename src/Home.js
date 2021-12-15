import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
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
      <TextField className='textfields'
        value={nomeTemp}
        label="Nome"
        fullWidth
        onChange={(e) => setNomeTemp(e.target.value)}
        variant="outlined" />

      <br />

      <TextField className='textfields'
        value={tarefaTemp}
        label="Tarefa"
        fullWidth
        multiline
        onChange={(e) => setTarefaTemp(e.target.value)}
        variant="outlined" />
      <br />

      <Button variant="contained" color="primary" onClick={() => handleClick(nomeTemp, tarefaTemp, id)}>
        Salvar
      </Button>
      <br />


      <br />
    </div>
  );
}

export default Home;
