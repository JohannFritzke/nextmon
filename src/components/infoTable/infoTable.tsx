import { GetSpecies } from "@/app/api/pokeAPI";
import { PokemonProps } from "@/app/api/tipagens";
import { getEV } from "@/app/api/pokeAPI";

const statDisplayNames: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

export async function InfoTable({ pokemon }: { pokemon: PokemonProps }) {
  const specie = await GetSpecies(pokemon.species.url);

  const pokemonSpecie =
    specie.genera.find(
      (entry: { language: { name: string } }) => entry.language.name === "en"
    )?.genus || "Unknown";

  const numFormat = (pokemon.weight / 10).toFixed(1);
  const growthRate = specie.growth_rate.name.split("-").join(" ");
  const evs = getEV(pokemon.stats);
  const formatGenderRate = (rate: number) => {
    if (rate === -1) return <span className="text-gray-500">Genderless</span>;

    const femalePercentage = (rate / 8) * 100;
    const malePercentage = 100 - femalePercentage;
    
    return (
      <span className="flex flex-col text-gray-500">
        <span>{malePercentage}% male</span>
        <span> {femalePercentage}% female</span>
      </span>
    );
  };

  return (
    <table className="w-full table-fixed border-separate border-spacing-x-5">
      <thead>
        <tr className="text-sm">
          <th className="border-b font-normal">Pokedex</th>
          <th className="border-b font-normal">Training</th>
          <th className="border-b font-normal">Breeding</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-sm">
          <td className="pt-1 capitalize text-gray-300 align-text-top flex flex-col gap-1">
            <span>
              Species: <span className="text-gray-500">{pokemonSpecie}</span>
            </span>

            <span>
              Weight: <span className="text-gray-500">{numFormat}kg</span>
            </span>

            <div className="flex">
              <span>Abilities:</span>
              <span className="text-gray-500 pl-1">
                {pokemon.abilities.map((a) => (
                  <p key={a.ability.name}>
                    {a.ability.name.split("-").join(" ")}
                    {a.is_hidden && " (HA)"}
                  </p>
                ))}
              </span>
            </div>
          </td>

          <td>
            <div className="pt-1 capitalize text-gray-300 align-text-top flex flex-col gap-1">
              <span>
                EV yield:{" "}
                {evs.map((ev, index) => (
                  <span key={index} className="text-gray-500">
                    {ev.value + " " + statDisplayNames[ev.type] || ev.type}
                    {index < evs.length - 1 && ", "}
                  </span>
                ))}
              </span>
              <span>
                Catch rate:
                <span className="text-gray-500"> {specie.capture_rate}</span>
              </span>
              <span>
                Base Friendship:
                <span className="text-gray-500"> {specie.base_happiness}</span>
              </span>
              <span>
                Base Exp:
                <span className="text-gray-500">
                  {" "}
                  {pokemon.base_experience}
                </span>
              </span>
              <span>
                Growth Rate: <span className="text-gray-500">{growthRate}</span>
              </span>
            </div>
          </td>

          <td className="pt-1 capitalize text-gray-300 align-text-top flex flex-col gap-1">
            <div>
              <span>Egg Groups: </span>
              <span className="text-gray-500">
                {specie.egg_groups[0].name.split("-").join(" ")}
                {specie.egg_groups[1] &&
                  ` | ${specie.egg_groups[1].name.split("-").join(" ")}`}
              </span>
            </div>
            <span>
              Egg cycles:
              <span className="text-gray-500"> {specie.hatch_counter}</span>
            </span>

            <span className="flex gap-1">
              Gender: {formatGenderRate(specie.gender_rate)}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
