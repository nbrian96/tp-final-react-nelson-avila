import { Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import PokemonList from '@pages/PokemonList'
import PokemonDetails from '@pages/PokemonDetails'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
