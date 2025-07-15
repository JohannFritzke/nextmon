import { PokemonBasicInfo } from "@/app/api/pokeAPI";
import Image from "next/image";
export function Grid({ pokemons }: { pokemons: PokemonBasicInfo[] }) {
  return (
    <main className="grid grid-cols-8 gap-4 place-items-center p-6">
      {pokemons.map((p) => (
        <div
          key={p.id}
          className="bg-white/5 flex-col w-36 place-items-center p-2 rounded-sm cursor-pointer shadow-white/20 shadow-sm"
        >
          <div className="flex justify-center">
            <div className={`w-[96px] h-[96px] absolute z-0 rounded-full bg-${p.types[0]}`}/>
            <Image
              src={`/sprites/Standart/normal/${p.id
                .toString()
                .padStart(3, "0")}.png`}
              alt=""
              width={96}
              height={96}
              className="z-1"
            />
          </div>
          <p className="text-gray-500">{`#${p.id
            .toLocaleString()
            .padStart(3, "0")}`}</p>
          <p className="capitalize text-gray-300">{p.name}</p>
          <div className="flex gap-4 pt-2">
            {p.types.map((t) => (
              <Image
                alt={t}
                src={`/sprites/Types/${t}.png`}
                width={26}
                height={26}
                title={t}
                key={t}
              />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
