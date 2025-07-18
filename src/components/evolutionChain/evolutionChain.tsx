import { GetEvolution, getMainEvolutionMethod } from "@/app/api/pokeAPI";
import Image from "next/image";
import { EvolutionIcon } from "../evoIcon/evoIcon";

export async function EvolutionChain({ url }: { url: string}) {
  const chain = await GetEvolution(url);
  if (!chain?.stage2) {
    return <></>;
  }
  return (
    <div className="bg-gray-800 h-48 rounded-md p-2 flex flex-col">
      <div className="text-md border-b text-center pb-1">Evolutionary Line</div>
      <div className="flex-1  flex items-center justify-around capitalize text-xs text-center ">
        <div className="flex">
          <div className={`w-[96px] h-[96px] bg-white/5 rounded-full absolute z-0`}></div>
          <Image
            src={`/sprites/Standart/normal/${chain.stage1.id
              .toString()
              .padStart(3, "0")}.png`}
            width={96}
            height={96}
            alt=""
            priority
            className="z-1"
          />
        </div>
        {chain?.stage2 && (
          <>
            <EvolutionIcon method={getMainEvolutionMethod(chain.stage2.evolution_details)} id={chain.stage2.id}/>
            <div className="flex">
              <div className="w-[96px] h-[96px] bg-white/5 rounded-full absolute z-0"></div>
              <Image
                src={`/sprites/Standart/normal/${chain.stage2.id
                  .toString()
                  .padStart(3, "0")}.png`}
                width={96}
                height={96}
                alt=""
                priority
                className="z-1"
              />
            </div>
          </>
        )}
        {chain?.stage3 && (
          <>
            <EvolutionIcon method={getMainEvolutionMethod(chain.stage3.evolution_details)} id={chain.stage3.id}/>
            <div className="flex">
              <div className="w-[96px] h-[96px] bg-white/5 rounded-full absolute z-0"></div>
              <Image
                src={`/sprites/Standart/normal/${chain.stage3.id
                  .toString()
                  .padStart(3, "0")}.png`}
                width={96}
                height={96}
                alt=""
                priority
                className="z-1"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
