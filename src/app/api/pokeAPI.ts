import { Console } from "console";

type PokemonListItem = {
  name: string;
  url: string;
};
type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonBasicInfo = {
  id: number;
  name: string;
  types: string[];
};

export async function GET(limit: Number): Promise<PokemonBasicInfo[]> {
  const list = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const { results } = await list.json();

  const detailsData = await Promise.all(
    results.map(async (pokemon: PokemonListItem) => {
      const details = await fetch(pokemon.url).then((res) => res.json());

      return {
        id: details.id,
        name: details.name,
        types: details.types.map((t: PokemonType) => t.type.name),
      };
    })
  );

  return detailsData;
}

// lib/pokeapi.ts
export async function fetchPaginatedPokemon(page: number = 1, limit: number = 50) {

  const offset = (page - 1) * limit;

  const adjustedLimit = (offset + limit) > 1025 ? 1025 - offset : limit;

  if (adjustedLimit <= 0) {
    return {
      detailsData: [],
      results: [],
      totalPages: Math.ceil(1025 / limit),
      currentPage: page,
      totalCount: 1025
    };
  }
  
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${adjustedLimit}`
  );
  const {results , count} = await response.json();

  const detailsData = await Promise.all(
    results.map(async (pokemon: PokemonListItem) => {
      const details = await fetch(pokemon.url).then((res) => res.json());

      return {
        id: details.id,
        name: cleanPokemonName(details.name),
        types: details.types.map((t: PokemonType) => t.type.name),
      };
    })
  );
  return {
    detailsData,
    results: results,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  };
}


export function cleanPokemonName(name: string): string {
  // Lista de exceções que devem manter o hífen
  const exceptions = [
    'ho-oh',
    'porygon-z',
    'jangmo-o',
    'hakamo-o',
    'kommo-o',
    'tatsugiri-curly',
    'great-tusk',
    'scream-tail',
    'brute-bonnet',
    'flutter-mane',
    'slither-wing',
    'sandy-shocks',
    'iron-treads',
    'iron-bundle',
    'iron-hands',
    'iron-jugulis',
    'iron-moth',
    'iron-thorns',
    'wo-chien',
    'chien-pao',
    'ting-lu',
    'chi-yu',
    'roaring-moon',
    'iron-valiant',
    'walking-wake',
    'iron-leaves',
    'gouging-fire',
    'raging-bolt',
    'iron-boulder',
    'iron-crown',
  ];

  if (exceptions.includes(name)) {
    return name;
  }

  // Remove sufixos após hífen, exceto para formas especiais
  return name.split('-')[0];
}