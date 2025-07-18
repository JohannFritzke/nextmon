import { MoveRight } from "lucide-react";
import Image from "next/image";


const list = [979]
export function EvolutionIcon({ method, id }: { method: string, id:number }) {
  
  const getIconSrc = () => {
    if (method.includes("To Use")) {
      const itemName = method.replace("To Use ", "").toLowerCase();
      return `/icons/${itemName.replace(" ","-")}.png`;
    }
    if (method.includes("Trade Holding")){
        const item = method.replace("Trade Holding ","").toLocaleLowerCase();
        return `/icons/${item.replace(" ","-")}.png`
    };
    if (method.includes("Level")) return "/icons/level-up.png";
    if (method.includes("Friendship")) return "/icons/soothe-bell.png";
    if (method.includes("Learned")) return "/icons/tm.png";
    if (method.includes("noite")) return "/icons/night.png";
    if (method.includes("dia")) return "/icons/day.png";
    if (method.includes("chuva")) return "/icons/rain.png";
    return "/icons/pokeball.png"; // Padrão
  };

  const description = (id: number) =>{
    if(list.includes(id)) return "Use Rage Fist 20 times";

    return method;
  }
  return (
    <div className="flex flex-col items-center">
      <span className="text-xs mt-1 text-center flex items-center gap-1 text-gray-300">{description(id)} <MoveRight width={16}/></span>
      <Image
        src={getIconSrc()}
        alt=""
        width={32}
        height={32}
        className="pt-1"
      />
    </div>
  );
}
