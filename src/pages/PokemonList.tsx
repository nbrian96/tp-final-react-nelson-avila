import React, { useState, useEffect } from 'react';
import {
    Alert,
    Box,
    Container,
    Grid,
    Pagination,
    Typography,
} from '@mui/material';

import { POKEMON_PAGE_SIZE, BACKGROUND_COLOR } from '@constants/index';
import Loading from '@components/Loading';
import { fetchPokemonList } from '@hooks/usePokemon';
import CardPokemon from '@components/CardPokemon';
import type { IPokemonListResponse, IPokemonDetails } from '@interfaces/pokemon.interfaces';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState<IPokemonListResponse | null>(null);
    const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const renderPokemonList = async (page: number) => {
        try {
            setLoading(true);

            const { data, details } = await fetchPokemonList(page);

            setPokemonList(data);
            setPokemonDetails(details);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        renderPokemonList(currentPage);
    }, [currentPage]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    if (loading) {
        return <Loading message="Cargando Pokémon..." />;
    }

    if (error) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Alert severity="error">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4, backgroundColor: BACKGROUND_COLOR }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Pokédex
            </Typography>

            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
            >
                {pokemonDetails.map((pokemon: IPokemonDetails) => (
                    <Grid
                        item
                        key={pokemon.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        display="flex"
                        justifyContent="center"
                    >
                        <CardPokemon {...pokemon} />
                    </Grid>
                ))}
            </Grid>

            {pokemonList && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Pagination
                        count={Math.ceil(pokemonList.count / POKEMON_PAGE_SIZE)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                        showFirstButton
                        showLastButton
                    />
                </Box>
            )}
        </Container>
    );
};

export default PokemonList;
