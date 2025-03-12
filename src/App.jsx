
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import Favorites from './pages/Favorites'



function App() {
 
  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>

    </main>
  )
}

export default App
