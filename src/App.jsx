import { render } from 'react-dom'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Header from './components/Header'
const root = document.getElementById('root')

const headerLinks = [
  {url: '/projects', label: 'Projects'},
  {url: '/resume', label: 'Resume'},
  {url: 'https://github.com/GalMarkelj', label: 'Github', icon: 'fa-brands fa-github', isExtrnal: true}
]

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>

        <div className="container">
          <Header links={headerLinks} />
        </div>
        
        <Routes>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

render(<App />, root)
