import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Rowlet() {
  return (
    <div className="flex justify-around items-center flex-1 p-2">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/rowlet`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/722.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-around text-xs w-35 text-center capitalize">
        <span className="flex flex-col items-center">
          Level 17
          <MoveRight />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/dartrix`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/723.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-around text-xs w-35 text-center capitalize">
        <span className="flex flex-col items-center">
          Level 34
          <MoveRight />
        </span>
        <span className="flex flex-col items-center">
          Level 36, in Legends: Arceus
          <MoveRight />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/decidueye`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/724.png"
            />
          </a>
        </div>
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/decidueye`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Hisuian/normal/724-hisuian.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
