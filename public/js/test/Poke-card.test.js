/* eslint-disable no-new */
import PokeCard from "../Poke-card";

describe("Given a PokeCard class", () => {
  describe("When it receives a div container", () => {
    test("Then it should render a li element with a 'pokemon-card' class inside the div container", () => {
      // Arrange
      const container = document.createElement("div");

      // Act
      new PokeCard(container);
      const pFound = container.querySelector("li.pokemon-card");

      // Assert
      expect(pFound).not.toBeNull();
    });
  });

  describe("When it receives a ul container", () => {
    test("Then it should render a li element with a 'pokemon-card' class inside the div container", () => {
      // Arrange
      const container = document.createElement("ul");

      // Act
      new PokeCard(container);
      const pFound = container.querySelector("li.pokemon-card");

      // Assert
      expect(pFound).not.toBeNull();
    });
  });
});
