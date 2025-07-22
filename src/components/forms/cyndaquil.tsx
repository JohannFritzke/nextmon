import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Cyndaquil() {
  return (
    <div className="flex justify-around items-center flex-1 p-2">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/cyndaquil`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/155.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-around text-xs w-35 text-center capitalize">
        <span className="flex flex-col items-center">
          Level 14, or Level 17 in Legends: Arceus
          <MoveRight />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/quilava`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/156.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-around text-xs w-35 text-center capitalize">
        <span className="flex flex-col items-center">
          Level 36
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
          <a href={`/pokemon/typhlosion`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/157.png"
            />
          </a>
        </div>
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/typhlosion`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Hisuian/normal/157-hisuian.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
