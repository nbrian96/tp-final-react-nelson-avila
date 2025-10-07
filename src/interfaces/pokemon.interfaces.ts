export interface IPokemon {
    name: string;
    url: string;
}

export interface IPokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPokemon[];
}

export interface IPokemonDetails {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    types: Array<{
        type: {
            name: string;
        };
    }>;
}