/* eslint-disable no-new */
import Component from "./Component.js";
import PokeCard from "./Poke-card.js";

class Page extends Component {
  constructor(parentElement) {
    super(parentElement, ".app-container");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `     <header class="header">
        <nav class="header__nav"></nav>
      </header>
      <main class="main">
        <h1 class="main__title">Browse Pokémon</h1>
        <section class="pokemon-container">
          <ul class="pokemon-list">
          </ul>
        </section>
      </main>`;

    const pokeList = document.querySelector(".pokemon-list");
    new PokeCard(pokeList);
  }
}

export default Page;
