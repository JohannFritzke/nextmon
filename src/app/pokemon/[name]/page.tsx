import { GetPokemon } from "@/app/api/pokeAPI";
import { Header } from "@/components/header/header";
import Image from "next/image";
import { cleanName } from "@/app/api/pokeAPI";
import { Sparkles } from "lucide-react";
import { BaseStats } from "@/components/baseStats/baseStats";
import { InfoTable } from "@/components/infoTable/infoTable";
import { Type } from "@/app/api/tipagens";
import { EvolutionChain } from "@/components/evolutionChain/evolutionChain";

export default async function Page(props: { params: Promise<{ name: string }> }) {
   const params = await props.params;
  const pokemon = await GetPokemon(params.name);
  const number = pokemon.id.toString().padStart(3, "0");
  const type = pokemon.types[0].type.name;
  const dir = "normal";
  return (
    <div className="flex flex-col justify-center">
      <Header />

      <main className="p-6 flex flex-col items-center w-full h-screen">
        <div className="bg-white/5 backdrop-blur-sm w-3xl rounded-md p-6 shadow-xl flex gap-4 flex-col">
          <div className="flex gap-4">
            <div className="bg-gray-800 w-48 h-48 p-3 flex justify-center items-center rounded-md flex-col relative">
              <div className="flex">
                <div
                  className={`w-[96px] h-[96px] rounded-full absolute z-0 bg-${type}`}
                ></div>
                <Image
                  src={`/sprites/Standart/${dir}/${number}.png`}
                  alt=""
                  width={96}
                  height={96}
                  className="z-1"
                  priority
                />
              </div>
              <p className="text-gray-500">#{number}</p>
              <p className="capitalize text-gray-300">
                {cleanName(pokemon.name)}
              </p>

              <div className="flex gap-2 mt-1">
                {pokemon.types.map((t: Type) => (
                  <Image
                    alt=""
                    src={`/sprites/Types/${t.type.name}.png`}
                    key={t.slot}
                    width={26}
                    height={26}
                    title={t.type.name}
                  />
                ))}
              </div>

              <div className="text-xs absolute top-1 right-2 p-1 text-center rounded-2xl"></div>
              <div className="absolute top-1 left-2 cursor-pointer">
                <Sparkles width={15} color="#ffeb66" />
              </div>
            </div>
            <BaseStats pokeStats={pokemon.stats} />
          </div>

          <div className="bg-gray-800 h-40 rounded-md p-2">
            <InfoTable pokemon={pokemon} />
          </div>

          <EvolutionChain url={pokemon.species.url} id={pokemon.id} />
        </div>
      </main>

      <footer className="w-full h-30"></footer>
    </div>
  );
}
