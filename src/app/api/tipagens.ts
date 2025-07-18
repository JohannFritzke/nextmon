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
  abilities: any[];
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

export interface EvolutionDetails {
  trigger: string;
  min_level?: number;
  item?: string;
  min_happiness?: number;
  min_affection?: number;
  time_of_day?: string;
  known_move?: {
    name: string;
  }
  held_item?: {
    name: string
  };
  location?: string;
  needs_rain?: boolean;
  upside_down?: boolean;
}

export interface EvolutionStage {
  id: number;
  name: string;
  evolution_details?: EvolutionDetails;
}

export interface EvoChain {
  stage1: EvolutionStage;
  stage2?: EvolutionStage;
  stage3?: EvolutionStage;
}