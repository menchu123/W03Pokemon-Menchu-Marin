import Page from "./js/Page.js";
import PokeServices from "./js/Poke-services.js";

const pokeContainer = document.querySelector("body");

new Page(pokeContainer);

const pokemonServices = new PokeServices();
