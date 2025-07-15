// app/page.tsx
export const dynamic = 'force-dynamic'; // Adicione esta linha no topo do arquivo

import { Header } from "@/components/header/header";
import { fetchPaginatedPokemon } from "@/app/api/pokeAPI";
import { Grid } from "@/components/grid/grid";
import { PokemonPagination } from "@/components/PokemonPagination/PokemonPagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const limit = 24; // Itens por página
  const totalPokemon = 1025; // Total fixo
  const totalPages = Math.ceil(totalPokemon / limit);

  const page = searchParams.page ? Number(searchParams.page) : 1;
  const pokemons = await fetchPaginatedPokemon(page, limit);

  return (
    <div className="flex-col justify-center">
      <Header />
      <main>
        <Grid pokemons={pokemons.detailsData} />
        <PokemonPagination
          totalPages={totalPages}
        />
      </main>
      <footer className="w-full h-30"></footer>
    </div>
  );
}