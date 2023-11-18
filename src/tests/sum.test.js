import { sum } from "../components/sum";

test("sum function should calculate sum of two numbers", () => {
  const result = sum(5, 4);

  // Assertion
  expect(result).toBe(9);
});
