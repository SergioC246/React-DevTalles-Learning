import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  id: number;
}

export const usePokemon = ({ id }: Props) => {

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const getPokemonById = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        const data = await response.json();

        setPokemon({
          id,
          name: data.name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });

      } catch (error) {
        console.error(error);
        setPokemon(null);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemonById();

  }, [id]);

  return {
    // state
    isLoading,
    pokemon,

    // derived data
    formattedId: id.toString().padStart(3, '0'),
  };
};