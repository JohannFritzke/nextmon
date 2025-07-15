import { Pokemon } from "@/app/api/pokeAPI";
import Image from "next/image";
import wList from "./exceptions.json"


export function PokeCards({ pokemon }: { pokemon: Pokemon }) {
  const number = pokemon.id.toString().padStart(3, "0");

  return (
    <div className="bg-white/5 w-36 h-48 place-items-center p-2 shadow-white/20 shadow-sm">
      {/*----------------------------Imagem do Pokemon----------------------------*/}
      <div className="flex justify-center">
        <div
          className={`w-[96px] h-[96px] absolute z-0 rounded-full bg-${pokemon.type[0]}`}
        ></div>
        <Image
          src={`/sprites/Standart/normal/${number}.png`}
          alt=""
          width={96}
          height={96}
          className="z-1"
        />
      </div>
      {/*--------------------------------------------------------------------------------*/}

      <p className="text-gray-500">{`#${number}`}</p>
      <p className="capitalize text-gray-300">{cleanName(pokemon.name)}</p>

      {/*-------------------------------Tipos do Pokemon----------------------------------*/}
      <div className="flex gap-2 mt-1">
        {
            pokemon.type.map((t)=>(
                <Image alt="" src={`/sprites/Types/${t}.png`} key={t} width={26} height={26} title={t}/>
            ))
        }
      </div>
      {/*--------------------------------------------------------------------------------*/}
      
    </div>
  );
}

function cleanName(name:string){
    if(wList.exceptions.includes(name)){
        return name;
    }

    return name.split('-')[0];
}