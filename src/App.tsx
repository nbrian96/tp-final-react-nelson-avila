import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import Home from '@pages/Home'
import PokemonList from '@pages/PokemonList'
import PokemonDetails from '@pages/PokemonDetails'
import Navbar from '@components/Navbar'

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
