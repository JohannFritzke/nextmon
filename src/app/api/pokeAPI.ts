import wList from "./exceptions.json";
import { EvolutionDetails, EvolutionList, PokemonStage } from "./tipagens";
const exceptions = [
  "magnezone",
  "probopass",
  "vikavolt",
  "leafeon",
  "glaceon",
  "sylveon",
  "dipplin",
  "hydrapple",
  "archaludon",
];
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

export async function GetEvolutionChain(url: string) {
  const specie = await GetSpecies(url);
  const evolution_chain = await fetch(specie.evolution_chain.url).then((res) =>
    res.json()
  );
  const list: EvolutionList = [{ stage1: [] }, { stage2: [] }, { stage3: [] }];

  if (evolution_chain.chain.evolves_to == 0) {
    return null;
  }

  const stage2 = evolution_chain.chain.evolves_to;
  const stage3 = stage2.flatMap((stage: PokemonStage) => stage.evolves_to);
  list[0].stage1?.push({
    name: evolution_chain.chain.species.name,
    url: evolution_chain.chain.species.url,
  });

  if (stage2) {
    stage2.forEach((stage: PokemonStage) => {
      list[1].stage2?.push({
        name: stage.species.name,
        url: stage.species.url,
        evolution_details: stage.evolution_details,
      });
    });
  }

  if (stage3) {
    stage3.forEach((stage: PokemonStage) => {
      list[2].stage3?.push({
        name: stage.species.name,
        url: stage.species.url,
        evolution_details: stage.evolution_details,
      });
    });
  }

  return list;
}

export function getIDbyURL(url: string) {
  const urlSemBarraFinal = url.endsWith("/") ? url.slice(0, -1) : url;

  const partes = urlSemBarraFinal.split("/");
  const ultimaParte = partes[partes.length - 1];
  const num = parseInt(ultimaParte, 10);
  if (num == 211) {
    return `/sprites/Hisuian/normal/${num.toString().padStart(3, "0")}-hisuian.png`;
  }
  if (num == 83) {
    return `/sprites/Galarian/normal/${num.toString().padStart(3, "0")}-galar.png`;
  }
  return `/sprites/Standart/normal/${num.toString().padStart(3, "0")}.png`;
}

export function getEvolutionDetails(
  details: EvolutionDetails[] | undefined,
  name?: string | undefined
) {
  if (!details) {
    return "";
  }

  if (name && exceptions.includes(name)) {
    return exceptionsPokemons(name);
  }
  if (details[0].trigger.name == "level-up") {
    if (details[0].time_of_day != "") {
      if (details[0].held_item != null) {
        return `Hold ${details[0].held_item.name}, ${details[0].time_of_day}Time`;
      }
      return `High Friendship, ${details[0].time_of_day}Time`;
    }
    if (details[0].known_move_type != null) {
      return `after ${details[0].known_move_type.name}-type move learned`;
    }
    if (details[0].min_happiness != null) {
      return `high Friendship`;
    }

    if (details[0].gender == 1) {
      return `Level ${details[0].min_level}, Female`;
    }

    if (details[0].gender == 2) {
      return `Level ${details[0].min_level}, Male`;
    }

    return `Level ${details[0].min_level}`;
  }

  if (details[0].trigger.name == "use-item") {
    if (details[0].gender == 2) {
      return `Use ${details[0].item?.name}, Male`;
    }
    if (details[0].gender == 1) {
      return `Use ${details[0].item?.name}, Female`;
    }
    return `Use ${details[0].item?.name}`;
  }

  if (details[0].trigger.name == "trade") {
    if (details[0].held_item != null) {
      return `trade holding, ${details[0].held_item.name}`;
    }
  }
  return details[0].trigger.name;
}

function exceptionsPokemons(name: string) {
  if (name == "magnezone" || name == "probopass" || name == "vikavolt") {
    return "use Thunder Stone, in Gen 8+, or level up in a Magnetic Field area";
  }

  switch (name) {
    case "leafeon":
      return "use Leaf Stone, or level up near a Moss-rock";
    case "glaceon":
      return "use Ice Stone, or level up near an Ice-rock";
    case "sylveon":
      return "after Fairy-type move learned, and either ♥♥ Affection in Gen 6-7 or high friendship in Gen 8+";
    case "dipplin":
      return "use Syrupy Apple";
    case "hydrapple":
      return "after Dragon Cheer learned";
    case "archaludon":
      return "use Metal Alloy";
  }
}
