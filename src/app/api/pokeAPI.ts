type Items={
  name:string;
  url:string;
}

type Type={
  slot: number,
  type:{
    name:string
  }
}
export type Pokemon={
    id: number,
    name: string,
    type: string[]
}

export type PokemonResponse = {
  pokemons: Pokemon[];
  totalCount: number;
  page: number;
  limit: number;
};

export async function  Get(page:number = 1, limit:number=48):Promise<PokemonResponse>{
  const offset =(page-1)*limit;

   if((offset+limit)>1025){
    limit = 1025 - offset
  }
  const api = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
  
  const {results,count} = await api.json()
  
  const pokemons = await Promise.all(results.map(async (i:Items) => {
    const pokemon = await fetch(i.url).then((r)=>r.json());
    return {
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.types.map((t:Type) => t.type.name)

    }
  }))

  return {
    pokemons,
    totalCount: count,
    page,
    limit
  };

}