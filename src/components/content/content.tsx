// app/HomeContent.tsx
"use client";

import { PokeCards } from "@/components/pokeCards/pokeCards";
import { PaginationList } from "@/components/PaginationList/PaginationList";
import { Get } from "@/app/api/pokeAPI";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

import { Pokemon } from "@/app/api/pokeAPI";

const MAX_POKEMON = 1025;
export function Content() {
  const searchParams = useSearchParams();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const page = searchParams.get("page")
        ? Number(searchParams.get("page"))
        : 1;
      const limit = 48;

      const { pokemons, totalCount } = await Get(page, limit);

      const adjustedTotalCount = Math.min(totalCount, MAX_POKEMON);
      setPokemons(pokemons);
      setTotalPages(Math.ceil(adjustedTotalCount / limit));
      setLoading(false);
    };

    fetchData();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="grid grid-cols-8 gap-4 p-6 place-items-center">
        {Array.from({ length: 48 }, (_, i) => {
          return <Skeleton className="w-36 h-48" key={i} />;
        })}
      </div>
    );
  }

  return (
    <>
      <main className="grid grid-cols-8 gap-4 p-6 place-items-center">
        {pokemons.map((p) => (
          <PokeCards pokemon={p} key={p.id} />
        ))}
      </main>
      <PaginationList
        currentPage={Number(searchParams.get("page")) || 1}
        totalPages={totalPages}
        visiblePages={5}
      />
    </>
  );
}
