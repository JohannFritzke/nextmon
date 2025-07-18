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
