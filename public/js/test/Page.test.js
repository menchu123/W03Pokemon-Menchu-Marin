/* eslint-disable no-new */
import Page from "../Page";

describe("Given a Page class constructor", () => {
  describe("When it receives a section container", () => {
    test("Then it should render a div element with a 'app-container' class inside the section container", () => {
      const container = document.createElement("div");

      new Page(container);
      const found = container.querySelector("div.app-container");

      expect(found).not.toBeNull();
    });
  });
});
