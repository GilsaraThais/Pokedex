import { Pokemon } from "../../@types/pokemon";

type props = {
  pokemon: Pokemon;
};

export function PokemonCard({ pokemon }: props) {
  return (
    <>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />

      <strong>
        #{pokemon.id} {pokemon.name}
      </strong>
    </>
  );
}
