"use client";
import { useEffect, useState } from "react";
type Pokemon = {
  name: string;
  url: string;
}

export default function Home() {
  const [pokemonList, setPokemonList] =
    useState<Pokemon[]>([]);
  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
"https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"      );
      const data = await response.json();
      setPokemonList(data.results);
    }
    getPokemon();
  }, []);
  return (
    <main>
      <h1>나만의 포켓몬 도감</h1>
      <div>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name}>
            <h2>{pokemon.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}