import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Pages/Register/Register'
import Genre from './Pages/Genre/Genre'
import Home from './Pages/Home/Home'
import Movies from './Pages/Movies/Movies'



function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/registered' element={<Home />} />
        <Route path='/genre' element={<Genre />} />
        <Route path='/' element={<Register />}/>
        <Route path='/movies' element={<Movies/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
