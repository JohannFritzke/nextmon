import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "../SearchBar/SearchBar";
export function Header() {
  return (
    <header className="w-full h-30 flex flex-col justify-center items-center bg-white/5 backdrop-blur-sm shadow-xl gap-5 z-1">
      <div className="flex items-center gap-2">
        <Image src="/imgs/icon.svg" alt="NextMon" width={30} height={30} priority />
        <h1 className="text-xl"><Link href="/">NextMon</Link></h1>
      </div>
      <SearchBar/>
    </header>
  );
}
