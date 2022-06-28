import { render } from 'react-dom'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Header from './src/components/Header'
import Footer from './src/components/Footer'

// pages
import IndexPage from './src/pages/IndexPage'
import ProjectsPage from './src/pages/ProjectsPage'


const root = document.getElementById('root')

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  )
}

render(<App />, root)
