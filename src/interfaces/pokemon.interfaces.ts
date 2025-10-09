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
        other?: {
            home?: {
                front_default?: string;
            };
            official_artwork?: {
                front_default?: string;
            };
        };
    };
    abilities: Array<{
        ability: {
            name: string;
        };
    }>;
    types: Array<{
        type: {
            name: string;
        };
    }>;
    stats: Array<{
        base_stat: number;
        stat: {
            name: string;
        };
    }>;
    height: number;
    weight: number;
    flavor_text_entries: Array<{
        language: {
            name: string;
        };
        flavor_text: string;
    }>;
}

export interface IFavoritesState {
    favorites: IPokemonDetails[];
}