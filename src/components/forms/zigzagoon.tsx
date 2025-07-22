import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Zigzagoon() {
  return (
    <div className="flex justify-around items-center flex-1 p-2">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/zigzagoon`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/263.png"
            />
          </a>
        </div>

        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/zigzagoon`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Galarian/normal/263-galar.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-around text-xs w-35 text-center capitalize">
        <span className="flex flex-col items-center">
          Level 20
          <MoveRight />
        </span>
        <span className="flex flex-col items-center">
          Level 20
          <MoveRight />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/linoone`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/264.png"
            />
          </a>
        </div>

        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/linoone`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Galarian/normal/264-galar.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-end text-xs w-35 text-center capitalize pb-7">
        <span className="flex flex-col items-center">
          Level 35, Nighttime
          <MoveRight />
        </span>
      </div>

      <div className="flex flex-col gap-2 h-full justify-end">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/obstagoon`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/862.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
