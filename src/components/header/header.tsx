import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";
import Link from "next/link";
export function Header() {
  return (
    <header className="w-full h-30 flex flex-col justify-center items-center bg-white/5 backdrop-blur-sm shadow-xl gap-5">
      <div className="flex items-center gap-2">
        <Image src="/imgs/icon.svg" alt="NextMon" width={30} height={30} priority />
        <h1 className="text-xl"><Link href="/">NextMon</Link></h1>
      </div>
      <div className="flex w-100 shadow-lg ">
        <Input
          type="text"
          placeholder="Buscar..."
          className="bg-gray-800 border-0 rounded-r-[0]"
        />
        <button className="bg-gray-800 w-10 flex justify-center items-center rounded-r-md ">
          <Search className="w-5"/>
        </button>
      </div>
    </header>
  );
}
