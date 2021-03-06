/* eslint-disable no-new */
import Component from "./Component.js";
import PokeCard from "./Poke-card.js";
import Button from "./Button.js";

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
    const html = `     
      <main class="main">
        
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
        new PokeCard(pokeListContainer, pokemon, false);
      });
    })();

    const paginationContainer = document.querySelector(".pagination");
    new Button(
      paginationContainer,
      "pagination__previous",
      "<",
      this.previousPage
    );

    new Button(paginationContainer, "pagination__next", ">", this.nextPage);

    if (this.page === 0) {
      const previousPageButton = document.querySelector(
        ".pagination__previous"
      );
      previousPageButton.classList.add("button--disabled");
    }
  }
}

export default Page;
