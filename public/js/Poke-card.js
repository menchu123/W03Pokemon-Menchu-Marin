/* eslint-disable no-new */
import Component from "./Component.js";
import PokeServices from "./Poke-services.js";
import Button from "./Button.js";

class PokeCard extends Component {
  url;
  pokemon;
  pokeName;
  pokeNumber;
  pokeImg;
  pokeType = [];
  favButton;

  constructor(parentElement, pokemon) {
    super(parentElement, "pokemon-card", "li");
    this.pokemon = pokemon;
    this.url = this.pokemon.url;

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

  action = () => {
    console.log(this.url);
    const pokemonServices = new PokeServices();
    pokemonServices.postPokemons(
      {
        name: this.pokeName,
        type: this.url,
      },
      "https://pokeapi-menchu.herokuapp.com/pokemon"
    );
  };

  generateHtml() {
    const html = `<div class="favorite">
                
                  </div>
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

    const favoriteButtonContainer = this.element.querySelector(".favorite");
    this.button = new Button(
      favoriteButtonContainer,
      "far fa-heart",
      "",
      this.action
    );
  }
}

export default PokeCard;
