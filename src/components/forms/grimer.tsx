import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Grimer() {
  return (
    <div className="flex justify-around items-center flex-1 p-2">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/grimer`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/088.png"
            />
          </a>
        </div>

        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/grimer`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Alolan/normal/088-alola.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-around text-xs w-35 text-center capitalize">
        <span className="flex flex-col items-center">
          Level 38
          <MoveRight />
        </span>
        <span className="flex flex-col items-center">
          Level 38
          <MoveRight />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/muk`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/089.png"
            />
          </a>
        </div>

        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/muk`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Alolan/normal/089-alola.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
