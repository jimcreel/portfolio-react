import { useState } from 'react'
import NameTag from './components/NameTag'
import Nav from './components/Nav'
import History from './components/History'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'



function App() {
 

  return (
    <>
      <div >
      <Nav />
      <NameTag />
      <Routes> 
        <Route path="/" element={<History />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </div>
    </>
  )
}

export default App
