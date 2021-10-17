import MyPokemonPage from "./js/MyPokemonPage.js";
import PokeServices from "./js/Poke-services.js";

const pokeContainer = document.querySelector("body");

const pokemonServices = new PokeServices();

new MyPokemonPage(
  pokeContainer,
  pokemonServices,
  `https://pokeapi-menchu.herokuapp.com/pokemon`
);

// pokemonServices.postPokemons(
//   {
//     name: "pikachu",
//     type: "electric",
//   },
//   "https://pokeapi-menchu.herokuapp.com/pokemon"
// );

// pokemonServices.deletePokemon(
//   "https://pokeapi-menchu.herokuapp.com/pokemon/",
//   4
// );

// (async () => {
//   const response = await fetch(`https://pokeapi-menchu.herokuapp.com/pokemon`);
//   const pokemons = await response.json();
//   console.log(pokemons);
//   return pokemons;
// })();
