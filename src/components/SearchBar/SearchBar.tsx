"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

type Suggestion = {
  name: string;
  url: string;
};

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Suggestion[]>([]);
  const [allPokemon, setAllPokemon] = useState<Suggestion[]>([]);
  const router = useRouter();

  // Busca todos os pokémons uma vez ao carregar
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
      const data = await res.json();
      setAllPokemon(data.results);
    }
    fetchData();
  }, []);

  // Atualiza os resultados conforme o usuário digita
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const filtered = allPokemon.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 8)); // Mostra no máx. 8 sugestões
  }, [query, allPokemon]);

  const handleSelect = (name: string) => {
    router.push(`/pokemon/${name}`);
    setQuery("");
    setResults([]);
  };

  return (
    <div className="relative w-100 shadow-lg z-1">
      <div className="flex">
        <Input
          type="text"
          placeholder="Search Pokémon..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-gray-800 border-0 rounded-r-[0]"
        />
        <button className="bg-gray-800 w-10 flex justify-center items-center rounded-r-md ">
          <Search className="w-5" />
        </button>
      </div>
      {results.length > 0 && (
        <ul className="absolute z-10 w-100 bg-gray-800 mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto overflow-auto no-scrollba">
          {results.map((pokemon) => {
            const id = pokemon.url.split("/").filter(Boolean).pop();
            return (
              <li
                key={pokemon.name}
                onClick={() => handleSelect(pokemon.name)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt={pokemon.name}
                  className="w-6 h-6"
                />
                <span className="capitalize text-white">{pokemon.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
