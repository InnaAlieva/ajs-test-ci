import getHealth from "../health";

test.each([
  [{ name: "Mar", health: 10 }, "critycal"],
  [{ name: "Mar", health: 33 }, "wounded"],
  [{ name: "Mar", health: 52 }, "healthy"],
])("%o", (status, expected) => {
  const result = getHealth(status);
  expect(result).toBe(expected);
});
