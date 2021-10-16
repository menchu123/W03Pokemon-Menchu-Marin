/* eslint-disable class-methods-use-this */
class PokeServices {
  apiUrl;

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
