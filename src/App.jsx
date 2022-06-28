import { render } from 'react-dom'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Header from './components/Header'
import Footer from './components/Footer'

// pages
import IndexPage from './components/IndexPage'


const root = document.getElementById('root')

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Header />
        <IndexPage />
        <Footer />
        <Routes />
      </BrowserRouter>
    </StrictMode>
  )
}

render(<App />, root)
