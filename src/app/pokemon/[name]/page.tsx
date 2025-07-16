import { GetPokemon } from "@/app/api/pokeAPI";
import { Header } from "@/components/header/header";
import Image from "next/image";
import { cleanName } from "@/app/api/pokeAPI";

type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type Stats = {
  base_stat: number;
  stat: { name: string };
};
export default async function pokePage({
  params,
}: {
  params: { name: string };
}) {
  const pokemon = await GetPokemon(params.name);
  const number = pokemon.id.toString().padStart(3, "0");
  const type = pokemon.types[0].type.name;
  const dir = "normal";

  const stats = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

  console.log(pokemon)
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <main className="p-6 flex flex-col items-center w-full h-screen">
        <div className="bg-white/5 backdrop-blur-sm w-3xl h-4/4 rounded-md p-6 shadow-xl flex gap-4">
          <div className="bg-gray-800 w-48 h-48 p-3 flex justify-center items-center rounded-md flex-col">
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
          </div>
          <div className="bg-gray-800 h-48 flex-1 rounded-md p-2 flex flex-col items-center">
            <p className="w-full text-center border-b-1">Base Stats</p>
            <table className="w-[359px] mt-1">
              <tbody>
                {pokemon.stats.map((s: Stats, i: number) => {
                  const statPercentage = Math.round((s.base_stat / 255) * 100);
                  return(
                  <tr className="text-xs" key={i}>
                    <td className="w-16 text-right py-1 text-gray-300">{stats[i]}</td>
                    <td className=" w-10 text-center py-1 text-gray-500">{s.base_stat}</td>
                    <td className="w-[100px] py-1">
                      <div
                        style={{ width: `${statPercentage}%` }}
                        className={`h-3 rounded-2xl bg-${s.stat.name}`}
                      ></div>
                    </td>
                  </tr>
                )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <footer className="w-full h-30"></footer>
    </div>
  );
}
