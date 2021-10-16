/* eslint-disable no-new */
import Component from "./Component.js";
import PokeCard from "./Poke-card.js";
import PaginationButton from "./Pagination.js";

class Page extends Component {
  pokemonServices;
  url;
  page = 0;
  pagedURL;

  constructor(parentElement, pokemonServices, url) {
    super(parentElement, "app-container");

    this.pokemonServices = pokemonServices;
    this.url = url;
    this.pagedURL = url;
    this.getPageURL();
    this.generateHTML(this.pagedURL);
  }

  getPageURL = () => {
    const offset = this.page * 9;
    const urlPage = `?offset=${offset}&limit=9`;
    const pagedURL = this.url + urlPage;
    this.pagedURL = pagedURL;
  };

  previousPage = () => {
    if (this.page > 0) {
      this.page--;
      this.getPageURL();
      this.generateHTML(this.pagedURL);
    }
  };

  nextPage = () => {
    this.page++;
    this.getPageURL();
    this.generateHTML(this.pagedURL);
  };

  generateHTML(url) {
    const html = `     <header class="header">
        <nav class="header__nav">
        <div class="logo">Pokedex<div>
        <button class="my-pokemon">MY POKEMON</button>
        </nav>
      </header>
      <main class="main">
        <h1 class="main__title"><img class="main__logo" src="img/pokemon-logo-black-transparent.png"><img></h1>
        <section class="pokemon-container">
          <ul class="pokemon-list">
          </ul>
        </section>
        <div class="pagination">
          
        </div>
      </main>`;

    this.element.innerHTML = html;

    const pokeListContainer = document.querySelector(".pokemon-list");

    (async () => {
      const getPokeService = await this.pokemonServices.getPokemons(url);
      const getPokeList = getPokeService.results;
      getPokeList.forEach((pokemon) => {
        new PokeCard(pokeListContainer, pokemon.url);
      });
    })();

    const paginationContainer = document.querySelector(".pagination");
    new PaginationButton(
      paginationContainer,
      "pagination__previous",
      "<",
      this.previousPage
    );

    new PaginationButton(
      paginationContainer,
      "pagination__next",
      ">",
      this.nextPage
    );
  }
}

export default Page;
