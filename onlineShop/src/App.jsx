import React from 'react'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import SignUp from './components/SignUp'

function App() {
  return (
    <>
      <Nav/>
      <hr />
      <Routes >
        <Route path="/" element={<h1>products</h1>}/>
        <Route path="/add" element={<h1>add products</h1>}/>
        <Route path="/update" element={<h1>update</h1>}/>
        <Route path="/logout" element={<h1>logout</h1>}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App