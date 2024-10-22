import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Add from './components/Add'
import PrivateRoutes from './components/PrivateRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route element={<PrivateRoutes/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/add" element={<Add />} /> 
      
      </Routes> 
      
    </>
  )
}

export default App
