/* eslint-disable no-new */
import Component from "./Component.js";

class PokeCard extends Component {
  constructor(parentElement) {
    super(parentElement, "pokemon-card", "li");

    this.generateHtml();
  }

  generateHtml() {
    const html = `
                  <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/131.svg"
                alt="Lapras"
                class="pokemon-card__img"
              />
              <span class="pokemon-card__number">#131</span>
              <span class="pokemon-card__name">Lapras</span>
              <ul class="pokemon-card__types">
                <li class="pokemon-card__type">WATER</li>
                <li class="pokemon-card__type">ICE</li>
              </ul>
              <div class="favorite"></div>
    `;

    this.element.innerHTML = html;
  }
}

export default PokeCard;
