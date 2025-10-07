import { POKEMON_API_BASE_URL, POKEMON_PAGE_SIZE } from '@constants/index';
import type { IPokemonListResponse, IPokemon } from '@interfaces/pokemon.interfaces';

export const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
        fire: '#ff6b6b',
        water: '#4dabf7',
        grass: '#51cf66',
        electric: '#ffd43b',
        psychic: '#da77f2',
        ice: '#74c0fc',
        dragon: '#4d26bf',
        dark: '#495057',
        fairy: '#faa2c1',
        normal: '#868e96',
        fighting: '#e64980',
        flying: '#91a7ff',
        poison: '#9775fa',
        ground: '#fd7e14',
        rock: '#868e96',
        bug: '#51cf66',
        ghost: '#9775fa',
        steel: '#868e96',
    };
    return colors[type] || '#868e96';
};

export const fetchPokemonList = async (page: number) => {
    try {
        const offset = (page - 1) * POKEMON_PAGE_SIZE;
        const response = await fetch(
            `${POKEMON_API_BASE_URL}/pokemon?limit=${POKEMON_PAGE_SIZE}&offset=${offset}`
        );

        if (!response.ok) {
            throw new Error('Error al cargar la lista de Pokémon');
        }

        const data: IPokemonListResponse = await response.json();

        const detailsPromises = data.results.map(async (pokemon: IPokemon) => {
            return fetchPokemonDetails(pokemon);
        });

        const details = await Promise.all(detailsPromises);
        return { data, details };
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

export const fetchPokemonDetails = async (pokemon: IPokemon) => {
    try {
        const response = await fetch(pokemon.url);
        if (!response.ok) {
            throw new Error(`Error al cargar detalles de ${pokemon.name}`);
        }
        return response.json();
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

