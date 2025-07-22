export type Stats = {
  base_stat: number;
  stat: { name: string };
};
export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
export type PokemonProps = {
  species: { url: string };
  base_experience: number;
  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
    slot: number;
  };
  weight: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
};
export interface PokemonStage {
  species: {
    name: string;
    url: string;
  };
  evolution_details?: EvolutionDetails[];
  evolves_to?: PokemonStage[];
}
export type StatEV = {
  effort: number;
  stat: {
    name: string;
  };
};
interface EvolutionStage {
  id?: number;
  name: string;
  url: string;
  evolution_details?: EvolutionDetails[];
}
export type EvolutionList = [
  { stage1: EvolutionStage[] },
  { stage2: EvolutionStage[] },
  { stage3: EvolutionStage[] }
];

export interface EvolutionDetails {
  gender: number;
  min_level: string;
  min_happiness: string;
  held_item: {
    name: string;
  };
  known_move_type: {
    name: string;
  };
  item?: {
    name: string;
  };
  time_of_day?: string;
  trigger: {
    name: string;
    url: string;
  };
}
