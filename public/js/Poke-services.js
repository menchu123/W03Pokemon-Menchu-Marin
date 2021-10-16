class PokeServices {
  apiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9";

  async getPokemons() {
    const response = await fetch(this.apiUrl);
    const pokemons = await response.json();
    return pokemons;
  }
}

export default PokeServices;
