/* eslint-disable no-new */
import Component from "./Component.js";
import PokeCard from "./Poke-card.js";

class Page extends Component {
  pokemonServices;
  url;

  constructor(parentElement, pokemonServices, url) {
    super(parentElement, "app-container");

    this.pokemonServices = pokemonServices;
    this.url = url;

    this.generateHTML();
  }

  generateHTML() {
    const html = `     <header class="header">
        <nav class="header__nav"></nav>
      </header>
      <main class="main">
        <h1 class="main__title">Browse Pokémon</h1>
        <section class="pokemon-container">
          <ul class="pokemon-list">
          </ul>
        </section>
      </main>`;

    this.element.innerHTML = html;

    const pokeListContainer = document.querySelector(".pokemon-list");

    (async () => {
      const getPokeService = await this.pokemonServices.getPokemons(this.url);
      const getPokeList = getPokeService.results;
      getPokeList.forEach(
        (pokemon) => new PokeCard(pokeListContainer, pokemon.url)
      );
    })();
  }
}

export default Page;
