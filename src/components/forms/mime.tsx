import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Mime() {
  return (
    <div className="flex justify-around items-center flex-1 p-2">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/mime`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/439.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full justify-around text-xs w-35 text-center capitalize">
        <span className="flex flex-col items-center">
          after Mimic learned, outside Galar
          <MoveRight />
        </span>
        <span className="flex flex-col items-center">
          after Mimic learned, in Galar
          <MoveRight />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/mr-mime`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/122.png"
            />
          </a>
        </div>

        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/mr-mime`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Galarian/normal/122-galar.png"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col h-full text-xs w-35 text-center capitalize justify-end p-5">
        <span className="flex flex-col items-center">
          Level 42
          <MoveRight />
        </span>
      </div>

      <div className="flex flex-col gap-2 h-full justify-end pb-1">
        <div className="flex">
          <div className="w-[96px] h-[96px] bg-white/5 rounded-full z-0 absolute"></div>
          <a href={`/pokemon/mr-rime`} className="z-1">
            <Image
              alt=""
              width={96}
              height={96}
              src="/sprites/Standart/normal/866.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
