import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import Home from '@pages/Home'
import NotFound from '@pages/NotFound'
import PokemonDetails from '@pages/PokemonDetails'
import PokemonList from '@pages/PokemonList'

import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
