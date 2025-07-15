import { Header } from "@/components/header/header";
import { PokeCards } from "@/components/pokeCards/pokeCards";

import { Get } from "./api/pokeAPI";

export default async function Home() {

 const pokemons =  await Get();
 
  return (
    <div className="flex-col justify-center">
      <Header />
      <main className="grid grid-cols-8 gap-4 p-6 place-items-center">
        {
          pokemons.map((p)=>(
            <PokeCards pokemon={p} key={p.id}/>
          ))
        }
      </main>
      <footer className="w-full h-30"></footer>
    </div>
  );
}