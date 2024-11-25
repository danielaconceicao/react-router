import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './pages/Home'
import Home from './pages/Home'
import Ricette from './pages/Ricette'
import AboutUs from './pages/AboutUs'

import './App.css'

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/ricette' element={<Ricette />}/>
            <Route path='/aboutUs' element={<AboutUs />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
