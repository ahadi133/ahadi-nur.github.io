import { describe, expect, it } from "vitest";
import { bestOption, crossover, expectedValue } from "./expected-value";

const outdoors = { option: "Outdoors", sunny: 100, rainy: -20 };
const porch = { option: "Porch", sunny: 90, rainy: 50 };
const indoors = { option: "Indoors", sunny: 40, rainy: 40 };
const payoffs = [outdoors, porch, indoors];

describe("expectedValue", () => {
  it("returns the rainy payoff at p = 0 and the sunny payoff at p = 1", () => {
    expect(expectedValue(outdoors, 0)).toBe(-20);
    expect(expectedValue(outdoors, 1)).toBe(100);
  });

  it("interpolates linearly", () => {
    expect(expectedValue(porch, 0.5)).toBe(70);
  });

  it("clamps probabilities outside [0, 1]", () => {
    expect(expectedValue(porch, -1)).toBe(50);
    expect(expectedValue(porch, 2)).toBe(90);
  });
});

describe("bestOption", () => {
  it("picks Porch below the threshold and Outdoors above it", () => {
    expect(bestOption(payoffs, 0).option).toBe("Porch");
    expect(bestOption(payoffs, 0.87).option).toBe("Porch");
    expect(bestOption(payoffs, 0.88).option).toBe("Outdoors");
    expect(bestOption(payoffs, 1).option).toBe("Outdoors");
  });

  it("never picks Indoors for the assignment payoffs", () => {
    for (let p = 0; p <= 1; p += 0.05) {
      expect(bestOption(payoffs, p).option).not.toBe("Indoors");
    }
  });

  it("throws on an empty list", () => {
    expect(() => bestOption([], 0.5)).toThrow();
  });
});

describe("crossover", () => {
  it("finds the 87.5% Outdoors/Porch threshold", () => {
    expect(crossover(outdoors, porch)).toBeCloseTo(0.875, 10);
  });

  it("returns null for parallel lines", () => {
    expect(crossover(indoors, { option: "Flat", sunny: 10, rainy: 10 })).toBeNull();
  });

  it("returns null when the lines cross outside [0, 1]", () => {
    expect(crossover(porch, indoors)).toBeNull();
  });
});
