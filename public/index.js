import Page from "./js/Page.js";
import PokeServices from "./js/Poke-services.js";
import PokeDetail from "./js/Pokemon-detail.js";

const pokeContainer = document.querySelector("body");

const pokemonServices = new PokeServices();

new Page(pokeContainer, pokemonServices, "https://pokeapi.co/api/v2/pokemon/");

new PokeDetail(pokeContainer);
