import {Stats} from '@/app/api/tipagens'



const stats = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];
export function BaseStats({pokeStats}:{pokeStats:Stats[]}) {
  return (
    <div className="bg-gray-800 h-48 flex-1 rounded-md p-2 flex flex-col items-center">
      <p className="w-full text-center border-b-1">Base Stats</p>
      <table className="w-[359px] mt-1">
        <tbody>
          {pokeStats.map((s: Stats, i: number) => {
            const statPercentage = Math.round((s.base_stat / 255) * 100);
            return (
              <tr className="text-xs" key={i}>
                <td className="w-16 text-right py-1 text-gray-300">
                  {stats[i]}
                </td>
                <td className=" w-10 text-center py-1 text-gray-500">
                  {s.base_stat}
                </td>
                <td className="w-[100px] py-1">
                  <div
                    style={{ width: `${statPercentage}%` }}
                    className={`h-3 rounded-2xl bg-${s.stat.name}`}
                  ></div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
