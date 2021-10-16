/* eslint-disable no-new */
import Component from "./Component.js";

class PokeCard extends Component {
  url;
  pokeName;
  pokeNumber;
  pokeImg;
  pokeType = [];

  constructor(parentElement, url) {
    super(parentElement, "pokemon-card", "li");
    this.url = url;

    this.generateHtml();
  }

  generateHtml() {
    const html = `
                  <img
                src="${this.pokeImg}"
                alt="${this.pokeName}"
                class="pokemon-card__img"
              />
              <span class="pokemon-card__number">#${this.pokeNumber}</span>
              <span class="pokemon-card__name">${this.pokeName}</span>
              <ul class="pokemon-card__types">
              ${
                this.pokeType.length > 2
                  ? `<li class="pokemon-card__type">${this.pokeType[0]}</li>`
                  : `<li class="pokemon-card__type">${this.pokeType[0]}</li>
                <li class="pokemon-card__type">${this.pokeType[1]}</li>`
              }
              </ul>
              <div class="favorite"></div>
    `;

    this.element.innerHTML = html;
  }
}

export default PokeCard;
