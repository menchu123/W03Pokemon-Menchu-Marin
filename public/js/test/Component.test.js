/* eslint-disable no-new */
import Component from "../Component";

describe("Given a component class constructor", () => {
  describe("When it receives a div container, a 'patata' class and a 'p' tag", () => {
    test("Then it should render a p element with a 'test' class inside the div container", () => {
      const container = document.createElement("div");
      const className = "patata";
      const tag = "p";

      new Component(container, className, tag);
      const found = container.querySelector("p.patata");

      expect(found).not.toBeNull();
    });
  });

  describe("When it receives a div container, a 'jordi' class and no tag", () => {
    test("Then it should render a p element with a 'jordi' class inside a div container", () => {
      const container = document.createElement("div");
      const className = "jordi";

      new Component(container, className);
      const found = container.querySelector("div.jordi");

      expect(found).not.toBeNull();
    });
  });
});
