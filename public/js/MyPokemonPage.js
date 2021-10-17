/* eslint-disable no-new */
import Component from "./Component.js";
import PokeCard from "./Poke-card.js";

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
      const getPokeServiceLocal = await this.pokemonServices.getPokemons(url);
      getPokeServiceLocal.forEach((pokemon) => {
        new PokeCard(pokeListContainer, pokemon, true, pokemon.id);
      });
    })();
  }
}

export default MyPokemonPage;
