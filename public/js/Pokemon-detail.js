import Component from "./Component.js";
import PokeServices from "./Poke-services.js";

class PokeDetail extends Component {
  pokemon;
  url;
  pokeName;
  pokeNumber;
  pokeImg;
  pokeType = [];
  height;
  weight;
  baseXP;

  constructor(pokemon) {
    const body = document.querySelector("body");
    super(body, "modal");
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
      this.height = getPokeData.height;
      this.weight = getPokeData.weight;
      this.baseXP = getPokeData.base_experience;

      this.generateHtml();
    })();

    this.generateHtml();
  }

  generateHtml() {
    const html = `<div class="modal">
      <div class="main-detail">
             <div class="pokemon-detail"> 
             <i class="fas fa-times"></i>
               <img
                src="${this.pokeImg}"                alt="${this.pokeName}"
                class="pokemon-detail__img"
              />
              <div class="pokemon-detail__data">
                 <div class="pokemon-detail__main">
                  <span class="pokemon-detail__number">${this.pokeNumber}</span>
                  <span class="pokemon-detail__name">${this.pokeName}</span>
              </div>
              <ul class="pokemon-detail__types">
                  ${
                    this.pokeType.length < 2
                      ? `<li class="pokemon-card__type">${this.pokeType[0]}</li>`
                      : `<li class="pokemon-card__type">${this.pokeType[0]}</li>
                <li class="pokemon-card__type">${this.pokeType[1]}</li>`
                  }
              </ul>
              
            </div>
            <div class="pokemon-detail__stats">
                <table>
                  <thead>
                    <tr>
                      <th colspan="2">STATS</th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr>
                      <td>HEIGHT</td>
                      <td>${this.height}</td>
                    </tr>
                    <tr>
                      <td>WEIGHT</td>
                      <td>${this.weight}</td>
                    </tr>
                    <tr>
                      <td>BASE XP</td>
                      <td>${this.baseXP}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
      </div>
      </div>`;

    this.element.innerHTML = html;

    const closeButton = this.element.querySelector(".fa-times");
    closeButton.addEventListener("click", () => {
      this.element.remove();
    });
  }
}

export default PokeDetail;
