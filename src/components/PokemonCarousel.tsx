import Slider from 'react-slick';
import { Box, Container, Typography } from '@mui/material';
import CardPokemon from '@components/CardPokemon';

import type { IPokemonDetails } from '@interfaces/pokemon.interfaces';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface PokemonCarouselProps {
    pokemons: IPokemonDetails[];
}

const PokemonCarousel = ({ pokemons }: PokemonCarouselProps) => {
  const settings = {
    dots: true,
    infinite: pokemons.length > 3,
    speed: 500,
    slidesToShow: Math.min(pokemons.length, 3),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Container>
      <Typography
        variant="body1"
        color="text.primary"
        gutterBottom
        align="center"
        fontSize="1.5rem"
        sx={{
          fontWeight: 'bold',
          color: 'primary.main'

        }}
      >
                Tus Pokémones Favoritos
      </Typography>
      <Slider {...settings}>
        {pokemons.map((pokemon: IPokemonDetails) => (
          <Box key={pokemon.id} sx={{ px: 1 }}>
            <CardPokemon {...pokemon} />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default PokemonCarousel;
