import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Menu}/>
      </Routes>
    </Router>
  )
}
