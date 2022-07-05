import { render } from 'react-dom'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Header from './src/components/Header'
import Footer from './src/components/Footer'

// pages
import IndexPage from './src/pages/IndexPage'
import ProjectsPage from './src/pages/ProjectsPage'
import Project from './src/pages/Project'

// testing images
import testImage1 from './src/images/testImage1.jpg'
// http://localhost:1234/testImage1.119a7262.jpg?1657005220949
import testImage2 from './src/images/testImage2.jpg'
// http://localhost:1234/testImage2.89dd9296.jpg?1657005239993
import testImage3 from './src/images/testImage3.jpg'
// http://localhost:1234/testImage3.469d247e.jpg?1657005247037

const root = document.getElementById('root')

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:project" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  )
}

render(<App />, root)
