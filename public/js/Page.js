/* eslint-disable no-new */
import Component from "./Component.js";
import PokeCard from "./Poke-card.js";

class Page extends Component {
  pokemonServices;

  constructor(parentElement, pokemonServices) {
    super(parentElement, "app-container");

    this.pokemonServices = pokemonServices;

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
      const getPokeService = await this.pokemonServices.getPokemons();
      const getPokeList = getPokeService.results;
      getPokeList.forEach(
        (pokemon) => new PokeCard(pokeListContainer, pokemon.url)
      );
    })();
    // new PokeCard(pokeList);
  }
}

export default Page;
