import wList from "./exceptions.json";
import { EvolutionDetails, EvoChain } from "./tipagens";

type Items = {
  name: string;
  url: string;
};

type Type = {
  slot: number;
  type: {
    name: string;
  };
};
export type Pokemon = {
  id: number;
  name: string;
  type: string[];
};

export type PokemonResponse = {
  pokemons: Pokemon[];
  totalCount: number;
  page: number;
  limit: number;
};

export async function Get(
  page: number = 1,
  limit: number = 48
): Promise<PokemonResponse> {
  const offset = (page - 1) * limit;

  if (offset + limit > 1025) {
    limit = 1025 - offset;
  }
  const api = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );

  const { results, count } = await api.json();

  const pokemons = await Promise.all(
    results.map(async (i: Items) => {
      const pokemon = await fetch(i.url).then((r) => r.json());
      return {
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.types.map((t: Type) => t.type.name),
      };
    })
  );

  return {
    pokemons,
    totalCount: count,
    page,
    limit,
  };
}

export async function GetPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    next: { revalidate: 3600 }, // Cache de 1 hora
  });
  if (!res.ok) throw new Error("Pokémon não encontrado");
  return res.json();
}

export function cleanName(name: string) {
  if (wList.exceptions.includes(name)) {
    return name;
  }

  return name.split("-")[0];
}

export async function GetSpecies(url: string) {
  const resp = await fetch(url).then((r) => r.json());

  return resp;
}

export function getEV(stats: any[]) {
  return stats
    .filter((stat) => stat.effort > 0)
    .map((s) => ({
      type: s.stat.name,
      value: s.effort,
    }));
}

export async function GetEvolution(url: string): Promise<EvoChain | null> {
  try {
    const specie = await GetSpecies(url);
    const chainData = await fetch(specie.evolution_chain.url).then((r) =>
      r.json()
    );

    const extractIdFromUrl = (url: string): number => {
      const matches = url.match(/\/pokemon-species\/(\d+)\//);
      return matches ? parseInt(matches[1]) : 0;
    };

    const getEvolutionDetails = (evolution: any): EvolutionDetails => {
      return {
        trigger: evolution?.evolution_details[0]?.trigger?.name || "unknown",
        min_level: evolution?.evolution_details[0]?.min_level,
        item: evolution?.evolution_details[0]?.item?.name,
        min_happiness: evolution?.evolution_details[0]?.min_happiness,
        min_affection: evolution?.evolution_details[0]?.min_affection,
        time_of_day: evolution?.evolution_details[0]?.time_of_day,
        known_move: evolution?.evolution_details[0]?.known_move,
        held_item: evolution?.evolution_details[0]?.held_item,
        location: evolution?.evolution_details[0]?.location,
        needs_rain: evolution?.evolution_details[0]?.needs_rain,
        upside_down: evolution?.evolution_details[0]?.upside_down,
      };
    };

    const chain: EvoChain = {
      stage1: {
        id: extractIdFromUrl(chainData.chain.species.url),
        name: chainData.chain.species.name,
      },
    };

    if (chainData.chain.evolves_to.length >= 1) {
      chain.stage2 = {
        id: extractIdFromUrl(chainData.chain.evolves_to[0].species.url),
        name: chainData.chain.evolves_to[0].species.name,
        evolution_details: getEvolutionDetails(chainData.chain.evolves_to[0]),
      };

      if (chainData.chain.evolves_to[0].evolves_to.length >= 1) {
        chain.stage3 = {
          id: extractIdFromUrl(
            chainData.chain.evolves_to[0].evolves_to[0].species.url
          ),
          name: chainData.chain.evolves_to[0].evolves_to[0].species.name,
          evolution_details: getEvolutionDetails(
            chainData.chain.evolves_to[0].evolves_to[0]
          ),
        };
      }
    }

    return chain;
  } catch (error) {
    console.error("Error fetching evolution chain:", error);
    return null;
  }
}


export function getMainEvolutionMethod(details: EvolutionDetails | undefined): string {
  if (!details) return "Evolui naturalmente";
  
  // Ordem de prioridade dos métodos
  if (details.item) return `To Use ${details.item.split("-").join(" ")}`;
  if (details.min_level) return `Level ${details.min_level}`;
  if (details.min_happiness) return `Friendship ${details.min_happiness}+`;
  if (details.known_move) return `Learned ${details.known_move.name.split("-").join(" ")}`;
  if (details.time_of_day) return `Level up in the ${details.time_of_day}`;
  if (details.location) return `Em ${details.location}`;
  if (details.held_item) return `Trade Holding ${details.held_item.name.split("-").join(" ")}`;
  if (details.needs_rain) return `Com chuva`;
  if (details.upside_down) return `De cabeça para baixo`;
  
  return "Trade";
}