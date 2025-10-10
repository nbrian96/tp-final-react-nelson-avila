import Slider from 'react-slick';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useMemo } from 'react';
import CardPokemon from '@components/CardPokemon';

import type { IPokemonDetails } from '@interfaces/pokemon.interfaces';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface PokemonCarouselProps {
  pokemons: IPokemonDetails[];
}

const PokemonCarousel = ({ pokemons }: PokemonCarouselProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.down('md')); // < 900px
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // >= 1200px

  const getSlidesToShow = useMemo(() => {
    let slidesToShow;
    if (isMobile) {
      slidesToShow = 1;
    } else if (isTablet) {
      slidesToShow = 2;
    } else if (isDesktop) {
      slidesToShow = Math.min(pokemons.length, 4);
    } else {
      slidesToShow = Math.min(pokemons.length, 3);
    }

    return slidesToShow;
  }, [isMobile, isTablet, isDesktop, pokemons.length]);

  const shouldBeInfinite = useMemo(() => {
    return pokemons.length > getSlidesToShow;
  }, [pokemons.length, getSlidesToShow]);

  const settings = useMemo(() => ({
    dots: true,
    infinite: shouldBeInfinite,
    speed: 500,
    slidesToScroll: 1,
    autoplay: shouldBeInfinite,
    autoplaySpeed: 4000,
    slidesToShow: getSlidesToShow,
    adaptiveHeight: true,
    arrows: shouldBeInfinite,
    centerMode: false,
    centerPadding: '0px'
  }), [getSlidesToShow, shouldBeInfinite]);

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
          <Box key={pokemon.id} sx={{
            px: { xs: 0.5, sm: 1 },
            display: 'flex',
            justifyContent: 'center'
          }}>
            <CardPokemon {...pokemon} />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default PokemonCarousel;
