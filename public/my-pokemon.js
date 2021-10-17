import MyPokemonPage from "./js/MyPokemonPage.js";
import PokeServices from "./js/Poke-services.js";

const pokeContainer = document.querySelector("body");

const pokemonServices = new PokeServices();

new MyPokemonPage(
  pokeContainer,
  pokemonServices,
  `https://pokeapi-menchu.herokuapp.com/pokemon`
);
