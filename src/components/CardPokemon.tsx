import { Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';

import { getTypeColor } from '@hooks/usePokemon';

import FavoriteButton from '@components/FavoriteButton';

import type { IPokemonDetails } from '@interfaces/pokemon.interfaces';

const CardPokemon = (pokemon: IPokemonDetails) => {
    const handleCardClick = () => {
        window.open(`/pokemon/${pokemon.name}`, '_blank');
    };

    const image = pokemon.sprites.other?.home?.front_default || pokemon.sprites.front_default;

    return (
        <Card
            onClick={handleCardClick}
            sx={{
                height: '100%',
                width: '15rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                position: 'relative',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                }
            }}
        >
            <FavoriteButton pokemon={pokemon} />
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={pokemon.name}
                sx={{ objectFit: 'contain', p: 1 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '0.8rem', my: 1 }}>
                    #{pokemon.id.toString().padStart(3, '0')}
                </Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: '1rem', my: 1 }}>
                    {pokemon.name
                        .replaceAll('-', ' ')
                        .charAt(0).toUpperCase() + pokemon.name.replaceAll('-', ' ').slice(1)}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {pokemon.types.map((type, index) => (
                        <Chip
                            key={index}
                            label={type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                            size="small"
                            sx={{
                                backgroundColor: getTypeColor(type.type.name),
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default CardPokemon;