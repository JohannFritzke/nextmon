import Image from "next/image";
import { MoveRight } from "lucide-react";
import { getEvolutionDetails, getIDbyURL } from "@/app/api/pokeAPI";
import { EvolutionList } from "@/app/api/tipagens";

interface PokemonEvolutionLineProps {
  line: EvolutionList[];
}
export function PokemonEvolutionLine({ line }: PokemonEvolutionLineProps) {
  const evolution = line[0];
  return (
    <div className="flex justify-around items-center flex-1 p-2">
      <div>
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/${evolution[0].stage1[0].name}`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src={`${getIDbyURL(evolution[0].stage1[0].url)}`}
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-around text-xs w-35 text-center capitalize">
        {evolution[1].stage2?.map((s, index) => (
          <span key={index} className="flex flex-col items-center">
            {getEvolutionDetails(s.evolution_details, s.name)}
            <MoveRight />
          </span>
        ))}
      </div>
      
      <div className="flex flex-col gap-2">
        {evolution[1].stage2?.map((stage, index) => (
          <div key={index}>
            <div className="flex">
              <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
              <a href={`/pokemon/${stage.name}`} className="z-1">
                <Image
                  alt=""
                  width={96}
                  height={96}
                  src={`${getIDbyURL(stage.url)}`}
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {evolution[2].stage3 && evolution[2].stage3.length > 0 && (
        <div className="flex flex-col h-full justify-center text-xs w-35 text-center capitalize">
          {evolution[2].stage3?.map((s, index) => (
            <span
              key={index}
              className={`flex flex-col items-center h-full ${
                s.name == "hydrapple" ? "justify-end pb-6" : "justify-center"
              }`}
            >
              {getEvolutionDetails(s.evolution_details, s.name)}
              <MoveRight />
            </span>
          ))}
        </div>
      )}
      {evolution[2].stage3 && evolution[2].stage3.length > 0 && (
        <div className="flex flex-col gap-2 h-full">
          {evolution[2].stage3?.map((stage, index) => (
            <div
              key={index}
              className={`flex h-full ${
                stage.name == "hydrapple" ? "items-end pb-1" : "items-center"
              }`}
            >
              <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
              <a href={`/pokemon/${stage.name}`} className="z-1 ">
                {" "}
                <Image
                  alt=""
                  width={96}
                  height={96}
                  src={`${getIDbyURL(stage.url)}`}
                />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
