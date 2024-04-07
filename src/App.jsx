// Import React
import { useState } from 'react'
import { Route, Routes } from 'react-router'
// Import Components
import Navbar from './components/navbar/Navbar'
import Home from './screens/Home.jsx'
import MayI from './screens/MayI.jsx'
import Remi from './screens/Remi.jsx'
import Yahtzee from './screens/Yahtzee.jsx'
// Import SCSS
import './App.scss'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MayI" element={<MayI />} />
          <Route path="/Remi" element={<Remi />} />
          <Route path="/Yahtzee" element={<Yahtzee />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
