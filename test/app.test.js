import greet from "../app";

test("if i greet", () => {
  expect(greet("World")).toBe("Hello World");
});
