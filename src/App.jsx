import { render } from 'react-dom'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import IndexPage from './components/IndexPage'

const root = document.getElementById('root')


const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>

        <IndexPage />
        
        <Routes>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

render(<App />, root)
