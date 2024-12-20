import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import AboutUs from './pages/AboutUs'
import Post from './pages/Post'
import NotFound from './pages/NotFound'

import './App.css'

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/aboutUs' element={<AboutUs />}/>
            <Route path='/posts' element={<Posts />}/>
            <Route path='/posts/:id'element={<Post/>} />
            
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
