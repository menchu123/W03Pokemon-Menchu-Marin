/* eslint-disable no-new */
import PokeCard from "../Poke-card";

describe("Given a PokeCard class constructor", () => {
  describe("When it receives a div container", () => {
    test("Then it should render a li element with a 'pokemon-card' class inside the div container", () => {
      const container = document.createElement("div");

      new PokeCard(container);
      const found = container.querySelector("li.pokemon-card");

      expect(found).not.toBeNull();
    });
  });

  describe("When it receives a ul container", () => {
    test("Then it should render a li element with a 'pokemon-card' class inside the div container", () => {
      const container = document.createElement("ul");

      new PokeCard(container);
      const found = container.querySelector("li.pokemon-card");

      expect(found).not.toBeNull();
    });
  });
});
