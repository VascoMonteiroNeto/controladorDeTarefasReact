import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router'

import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import TarefasPendentes from './TarefasPendentes'
import TarefaDetalhes from './TarefaDetalhes'

export default function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route exact path='/criar' element={<Home/>}/>
          <Route exact path='/pendentes' element={<TarefasPendentes/>}/>
          <Route exact path='/pendentes/:id' element={<TarefaDetalhes/>}/>
        </Routes>
      </div>
    </Router>
  )
}
