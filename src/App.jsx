// Import React
import { useState } from 'react'
import { Route, Routes } from 'react-router'
// Import Components
import Navbar from './components/navbar/Navbar'
import Home from './screens/Home.jsx'
// Import SCSS
import './App.scss'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
