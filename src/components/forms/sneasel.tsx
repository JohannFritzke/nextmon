import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Sneasel() {
  return (
    <div className="flex justify-around items-center flex-1 p-2">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/sneasel`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/215.png"
            />
          </a>
        </div>

        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/sneasel`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Hisuian/normal/215-hisuian.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-around text-xs w-35 text-center capitalize">
        <span className="flex flex-col items-center">
          Hold razor claw, nightTime
          <MoveRight />
        </span>
        <span className="flex flex-col items-center">
          Hold razor claw, dayTime
          <MoveRight />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/weavile`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/461.png"
            />
          </a>
        </div>

        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/sneasler`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/903.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
