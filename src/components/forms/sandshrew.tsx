import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Sandshrew() {
  return (
    <div className="flex justify-around items-center flex-1 p-2">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/sandshrew`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/027.png"
            />
          </a>
        </div>

        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/sandshrew`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Alolan/normal/027-alola.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-around text-xs w-35 text-center capitalize">
        <span className="flex flex-col items-center">
          Level 22
          <MoveRight />
        </span>
        <span className="flex flex-col items-center">
          use Ice Stone
          <MoveRight />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/sandslash`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/028.png"
            />
          </a>
        </div>

        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/sandslash`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Alolan/normal/028-alola.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
