import Image from "next/image";
import { EvolutionIcon } from "../evoIcon/evoIcon";
import {
  GetEvolutionChain,
  getEvolutionDetails,
  getIDbyURL,
} from "@/app/api/pokeAPI";
import { MoveRight } from "lucide-react";
export async function EvolutionChain({ url }: { url: string }) {
  const evolution = await GetEvolutionChain(url);
  if (evolution == null) {
    return <></>;
  }
  return (
    <div className="bg-gray-800 min-h-48 rounded-md p-2 flex flex-col">
      <div className="text-md border-b text-center pb-1">Evolutionary Line</div>
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
    </div>
  );
}
