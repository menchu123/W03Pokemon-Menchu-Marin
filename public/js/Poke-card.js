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

  constructor(parentElement, pokemon, isSelected, id) {
    super(parentElement, "pokemon-card", "li");
    this.pokemon = pokemon;
    this.url = this.pokemon.url;
    this.isSelected = isSelected;
    this.id = id;

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
    this.checkPokemon();
  }

  checkPokemon = () => {};

  favPokemon = async () => {
    const pokemonServices = new PokeServices();
    const favedPokemons = await pokemonServices.getPokemons(
      "https://pokeapi-menchu.herokuapp.com/pokemon"
    );

    const favedPokemonsNames = [];
    favedPokemons.forEach((pokemon) => {
      favedPokemonsNames.push(pokemon.name.toLowerCase());
    });

    console.log(favedPokemonsNames);
    console.log(this.pokemon.name);
    const isDuplicate = favedPokemonsNames.some(
      (pokemonName) => pokemonName === this.pokemon.name
    );
    console.log(!isDuplicate);
    if (!isDuplicate) {
      pokemonServices.postPokemons(
        {
          name: this.pokeName,
          url: this.url,
        },
        "https://pokeapi-menchu.herokuapp.com/pokemon"
      );
      this.button.element.classList.add("fas");
    }
  };

  unfavPokemon = () => {
    const pokemonServices = new PokeServices();
    pokemonServices.deletePokemon(
      "https://pokeapi-menchu.herokuapp.com/pokemon/",
      this.pokemon.id
    );
    this.button.element.classList.remove("fas");
    this.button.element.classList.add("far");
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
    const buttonClass = this.isSelected ? "fas fa-heart" : "far fa-heart";
    const action = this.isSelected ? this.unfavPokemon : this.favPokemon;
    this.button = new Button(favoriteButtonContainer, buttonClass, "", action);
  }
}

export default PokeCard;
