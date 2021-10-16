/* eslint-disable no-new */
import Component from "./Component.js";
import PokeCard from "./Poke-card.js";

class Page extends Component {
  pokemonServices;
  url;
  page;

  constructor(parentElement, pokemonServices, url, page = 0) {
    super(parentElement, "app-container");

    this.pokemonServices = pokemonServices;
    this.page = page;
    this.url = url + this.getPageURL();

    this.generateHTML();
  }

  getPageURL() {
    const offset = this.page * 9;
    const urlPage = `?offset=${offset}&limit=9`;
    return urlPage;
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
      getPokeList.forEach((pokemon) => {
        new PokeCard(pokeListContainer, pokemon.url);
      });
    })();
  }
}

export default Page;
