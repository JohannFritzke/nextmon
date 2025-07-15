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

export async function  Get(page:number = 1, limit:number=48){
  const offset =(page-1)*limit;
  const api = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
  
  const {results} = await api.json()
  
  const pokemons = await Promise.all(results.map(async (i:Items) => {
    const pokemon = await fetch(i.url).then((r)=>r.json());

    return {
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.types.map((t:Type) => t.type.name)

    }
  }))

  return pokemons;

}