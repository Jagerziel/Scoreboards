// Import React
import { useState } from 'react'
import { Route, Routes } from 'react-router'
// Import Components
import Home from './screens/Home.jsx'
// Import SCSS
import './App.scss'

function App() {

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
