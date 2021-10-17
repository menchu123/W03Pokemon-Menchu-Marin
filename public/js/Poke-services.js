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

  async postPokemons(pokemon, url) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon),
    });
    const newElement = await response.json();
  }
}

export default PokeServices;
