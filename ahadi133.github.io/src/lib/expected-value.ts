import type { Payoff } from "@/types/content";

/** EV = p·sunny + (1 − p)·rainy, with p clamped to [0, 1]. */
export function expectedValue(payoff: Payoff, pSunny: number): number {
  const p = Math.min(1, Math.max(0, pSunny));
  return p * payoff.sunny + (1 - p) * payoff.rainy;
}

/** Option with the highest EV at p; ties go to the earlier option. */
export function bestOption(payoffs: readonly Payoff[], pSunny: number): Payoff {
  if (payoffs.length === 0) {
    throw new Error("bestOption needs at least one payoff");
  }
  return payoffs.reduce((best, candidate) =>
    expectedValue(candidate, pSunny) > expectedValue(best, pSunny) ? candidate : best,
  );
}

/** Probability where two options have equal EV, or null if they never cross in [0, 1]. */
export function crossover(a: Payoff, b: Payoff): number | null {
  const slopeDiff = a.sunny - a.rainy - (b.sunny - b.rainy);
  if (slopeDiff === 0) return null;
  const p = (b.rainy - a.rainy) / slopeDiff;
  return p >= 0 && p <= 1 ? p : null;
}
