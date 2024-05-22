import { } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import RecipePage from './Pages/RecipePage'
import Navbar from './components/ui/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipe/:recipeid' element={<RecipePage />} />

        <Route path='*' element={<h1> This page doesn't exist. </h1>} />
      </Routes>

    </>
  )
}

export default App
