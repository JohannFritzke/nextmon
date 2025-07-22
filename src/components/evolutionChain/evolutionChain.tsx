import { GetEvolutionChain } from "@/app/api/pokeAPI";
import { PokemonEvolutionLine } from "./pokemonEvolutionLine";
import { EvolutionList } from "@/app/api/tipagens";
import * as Forms from "@/components/forms";

export async function EvolutionChain({ url,id }: { url: string,id:number }) {
  const evolution: EvolutionList | null = await GetEvolutionChain(url);
  if (evolution == null) {
    return <></>;
  }
  return (
    <div className="bg-gray-800 min-h-48 rounded-md p-2 flex flex-col">
      <div className="text-md border-b text-center pb-1">Evolutionary Line</div>
      {
        (()=>{
          switch(id){
            case 19: return <Forms.Rattata/>
            case 20: return <Forms.Rattata/>
            case 27: return <Forms.Sandshrew/>
            case 28: return <Forms.Sandshrew/>
            case 37: return <Forms.Vulpix/>
            case 38: return <Forms.Vulpix/>
            case 50: return <Forms.Diglett/>
            case 51: return <Forms.Diglett/>
            case 52: return <Forms.Meowth/>
            case 53: return <Forms.Meowth/>
            case 863: return <Forms.Meowth/>
            case 74: return <Forms.Geodude/>
            case 75: return <Forms.Geodude/>
            case 76: return <Forms.Geodude/>
            case 88: return <Forms.Grimer/>
            case 89: return <Forms.Grimer/>
            case 102: return <Forms.Exeggcute/>
            case 103: return <Forms.Exeggcute/>
            case 104: return <Forms.Cubone/>
            case 105: return <Forms.Cubone/>
            case 77: return <Forms.Ponyta/>
            case 78: return <Forms.Ponyta/>
            case 79: return <Forms.Slowpoke/>
            case 80: return <Forms.Slowpoke/>
            case 199: return <Forms.Slowpoke/>
            case 109: return <Forms.Koffing/>
            case 110: return <Forms.Koffing/>
            case 122: return <Forms.Mime/>
            case 439: return <Forms.Mime/>
            case 866: return <Forms.Mime/> 
            case 263: return <Forms.Zigzagoon/> 
            case 264: return <Forms.Zigzagoon/> 
            case 862: return <Forms.Zigzagoon/> 
            case 554: return <Forms.Darumaka/> 
            case 555: return <Forms.Darumaka/>
            case 562: return <Forms.Yamask/> 
            case 563: return <Forms.Yamask/> 
            case 867: return <Forms.Yamask/>
            case 58: return <Forms.Growlithe/> 
            case 59: return <Forms.Growlithe/>  
            case 100: return <Forms.Voltorb/>
            case 101: return <Forms.Voltorb/>
            case 215: return <Forms.Sneasel/>
            case 461: return <Forms.Sneasel/>
            case 903: return <Forms.Sneasel/>
            case 155: return <Forms.Cyndaquil/>
            case 156: return <Forms.Cyndaquil/>
            case 157: return <Forms.Cyndaquil/>
            case 501: return <Forms.Oshawott/>
            case 502: return <Forms.Oshawott/>
            case 503: return <Forms.Oshawott/>
            case 548: return <Forms.Petilil/>
            case 549: return <Forms.Petilil/>
            case 570: return <Forms.Zorua/>
            case 571: return <Forms.Zorua/>
            case 627: return <Forms.Rufflet/>
            case 628: return <Forms.Rufflet/>
            case 704: return <Forms.Goomy/>
            case 705: return <Forms.Goomy/>
            case 706: return <Forms.Goomy/>
            case 712: return <Forms.Bergmite/>
            case 713: return <Forms.Bergmite/>
            case 722: return <Forms.Rowlet/>
            case 723: return <Forms.Rowlet/>
            case 724: return <Forms.Rowlet/>
            default: return <PokemonEvolutionLine line={[evolution]} />
          }
        })()
      }
    </div>
  );
}
