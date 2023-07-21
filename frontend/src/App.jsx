import { useState } from 'react'
import NameTag from './components/NameTag'
import Nav from './components/Nav'
import History from './components/History'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'
import MakerSpacePage from './components/MakerSpacePage'



function App() {
  const [tech] = useState([
    {   
        bootstrap: 'devicon-bootstrap-plain-wordmark',
        css: 'devicon-css3-plain-wordmark',
        django: 'devicon-django-plain-wordmark',
        express:'devicon-express-original-wordmark',
        figma: 'devicon-figma-plain',
        flask: 'devicon-flask-original-wordmark',
        git: 'devicon-git-plain-wordmark',
        github: 'devicon-github-original-wordmark',
        heroku: 'devicon-heroku-original-wordmark',
        html: 'devicon-html5-plain-wordmark',
        javascript: 'devicon-javascript-plain',
        jquery: 'devicon-jquery-plain-wordmark',
        mongo: 'devicon-mongodb-plain-wordmark',
        node: 'devicon-nodejs-plain-wordmark',
        postgresql: 'devicon-postgresql-plain-wordmark',
        python: 'devicon-python-plain-wordmark',
        rpi: 'devicon-raspberrypi-line-wordmark',
        react: 'devicon-react-original-wordmark',
        sass: 'devicon-sass-original',
        tailwind: 'devicon-tailwindcss-original-wordmark'
    }
])

  return (
    <>
      <div >
      <Nav />
      <NameTag />
      <Routes> 
        <Route path="/" element={<History />} />
        <Route path="/about" element={<AboutPage tech={tech}/>} />
        <Route path="/projects" element={<ProjectsPage tech={tech}/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/makerSpace" element={<MakerSpacePage />} />
      </Routes>
      </div>
    </>
  )
}

export default App
