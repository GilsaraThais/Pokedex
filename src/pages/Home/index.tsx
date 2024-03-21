import { Link } from "react-router-dom";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { Container } from "./style";
import { PokemonCard } from "../../components/pokemonCards";

export function Home() {
  const { data, isLoading, error, page, totalPages } = useQueryPokemonPage();
  console.log(data);
  return (
    <Container>
      <h1>{"Bem-Vindo(a) à Pokédex do Reprograma Jucás"}</h1>
      {isLoading && <samp className="loading">Loading...</samp>}
      {!isLoading && error && <samp className="loading">Error...</samp>}

      <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to={"/details"} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>

      <div className="paginationComponent">
        <button>&alt; Anterior</button>
        <span className="numberPage">
          {page}/{totalPages}
        </span>
        <button>Próxima &gt;</button>
      </div>
    </Container>
  );
}
