/* eslint-disable no-new */
import Component from "../Component";

describe("Given a component class", () => {
  describe("When it receives a div container, a 'patata' class and a 'p' tag", () => {
    test("Then it should render a p element with a 'test' class inside the div container", () => {
      // Arrange
      const container = document.createElement("div");
      const className = "patata";
      const tag = "p";

      // Act
      new Component(container, className, tag);
      const pFound = container.querySelector("p.patata");

      // Assert
      expect(pFound).not.toBeNull();
    });
  });

  describe("When it receives a div container, a 'jordi' class and no tag", () => {
    test("Then it should render a p element with a 'jordi' class inside a div container", () => {
      // Arrange
      const container = document.createElement("div");
      const className = "jordi";

      // Act
      new Component(container, className);
      const dFound = container.querySelector("div.jordi");

      // Assert
      expect(dFound).not.toBeNull();
    });
  });
});
