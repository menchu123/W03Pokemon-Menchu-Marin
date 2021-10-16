import Page from "./js/Page.js";
import PokeServices from "./js/Poke-services.js";

const pokeContainer = document.querySelector("body");

const pokemonServices = new PokeServices();

const proxy = "https://cors-anywhere.herokuapp.com/";

// new Page(
//   pokeContainer,
//   pokemonServices,
//   `${proxy}https://pokeapi-menchu.herokuapp.com/`
// );

(async () => {
  const response = await fetch(
    `${proxy}https://pokemon-api-w03-wkch.herokuapp.com/pokemon`
  );
  const pokemons = await response.json();
  console.log(pokemons);
  return pokemons;
})();
