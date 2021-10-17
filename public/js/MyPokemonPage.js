/* eslint-disable no-new */
import Component from "./Component.js";
import PokeCard from "./Poke-card.js";
import Button from "./Button.js";

class MyPokemonPage extends Component {
  pokemonServices;
  url;

  constructor(parentElement, pokemonServices, url) {
    super(parentElement, "app-container");

    this.pokemonServices = pokemonServices;
    this.url = url;
    this.generateHTML(this.url);
  }

  generateHTML(url) {
    const html = `     <header class="header">
        <nav class="header__nav">
        <button class="my-pokemon"></i>MY POKEMON</button>
        <h1 class="main__title"><img class="main__logo" src="img/pokemon-logo-black-transparent.png"><img></h1>
        </nav>
      </header>
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
      console.log(getPokeService);
    })();
  }
}

export default MyPokemonPage;
