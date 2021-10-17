import Button from "../Button";

describe("Given a Pagination class constructor", () => {
  describe("When it receives a div container, a 'patata' class and a 'test' text", () => {
    test("Then it should render a button element 'test' text inside the button", () => {
      const container = document.createElement("div");
      const text = "test";

      const button = new Button(container, "patata", text);

      expect(button.element.textContent).toBe(text);
    });
  });

  describe("When it receives a div container, a 'patata' class, a 'test' text and a function", () => {
    test("Then when the user clicks the button, the function should be invoked", () => {
      const container = document.createElement("div");
      const action = jest.fn();

      const button = new Button(container, "patata", "test", action);
      button.element.dispatchEvent(new Event("click"));

      expect(action).toHaveBeenCalled();
    });
  });
});
