import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Slowpoke() {
  return (
    <div className="flex justify-around items-center flex-1 p-2">
      <div className="flex flex-col justify-around h-full">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/slowpoke`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/079.png"
            />
          </a>
        </div>
            <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/slowpoke`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Galarian/normal/079-galar.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-around text-xs w-35 text-center capitalize">
        <span className="flex flex-col items-center">
          Level 37
          <MoveRight />
        </span>
        <span className="flex flex-col items-center">
          trade holding Kings Rock
          <MoveRight />
        </span>
         <span className="flex flex-col items-center">
          use Galarica Cuff
          <MoveRight />
        </span>
        <span className="flex flex-col items-center">
          use Galarica Wreath
          <MoveRight />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/slowbro`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/080.png"
            />
          </a>
        </div>
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/slowking`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/199.png"
            />
          </a>
        </div>

        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/slowbro`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Galarian/normal/080-galar.png"
            />
          </a>
        </div>

        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/slowking`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Galarian/normal/199-galar.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
