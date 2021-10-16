/* eslint-disable class-methods-use-this */
class PokeServices {
  apiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9";

  constructor(url) {
    this.apiUrl = url;
  }

  async getPokemons(url) {
    const response = await fetch(url);
    const pokemons = await response.json();
    return pokemons;
  }
}

export default PokeServices;
