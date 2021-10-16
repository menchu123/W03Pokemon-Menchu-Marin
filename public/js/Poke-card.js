/* eslint-disable no-new */
import Component from "./Component.js";
import PokeServices from "./Poke-services.js";

class PokeCard extends Component {
  url;
  pokeName;
  pokeNumber;
  pokeImg;
  pokeType = [];

  constructor(parentElement, url) {
    super(parentElement, "pokemon-card", "li");
    this.url = url;

    (async () => {
      const pokeServices = new PokeServices(this.url);
      const getPokeData = await pokeServices.getPokemons(this.url);
      this.pokeName = getPokeData.name.toUpperCase();
      this.pokeNumber = getPokeData.id.toString().padStart(3, "0");
      this.pokeImg = getPokeData.sprites.other.dream_world.front_default;
      const pokeTypes = getPokeData.types;
      pokeTypes.forEach((type) =>
        this.pokeType.push(type.type.name.toUpperCase())
      );
      this.generateHtml();
    })();

    this.generateHtml();
  }

  generateHtml() {
    const html = `
                  <i class="far fa-heart" "pokemon-card__favorite" "pokemon-card__favorite--unselected"></i>
                  <i class="fas fa-heart" "pokemon-card__favorite" "pokemon-card__favorite--selected"></i>
                  <img
                src="${this.pokeImg}"
                alt="${this.pokeName}"
                class="pokemon-card__img"
              />
              <span class="pokemon-card__number">#${this.pokeNumber}</span>
              <span class="pokemon-card__name">${this.pokeName}</span>
              <ul class="pokemon-card__types">
              ${
                this.pokeType.length < 2
                  ? `<li class="pokemon-card__type">${this.pokeType[0]}</li>`
                  : `<li class="pokemon-card__type">${this.pokeType[0]}</li>
                <li class="pokemon-card__type">${this.pokeType[1]}</li>`
              }
              </ul>
              
    `;

    this.element.innerHTML = html;
  }
}

export default PokeCard;
