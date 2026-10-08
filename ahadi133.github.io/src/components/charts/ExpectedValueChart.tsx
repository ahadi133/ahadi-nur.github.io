"use client";

import { useId, useState } from "react";
import { bestOption, crossover, expectedValue } from "@/lib/expected-value";
import type { Payoff } from "@/types/content";

const WIDTH = 560;
const HEIGHT = 280;
const PAD = { top: 16, right: 16, bottom: 36, left: 48 };
const COLORS = [
  "var(--highlight)",
  "var(--primary-soft)",
  "var(--muted)",
  "var(--secondary)",
];

const toPercent = (p: number) => `${Math.round(p * 1000) / 10}%`;

export function ExpectedValueChart({ payoffs }: { payoffs: readonly Payoff[] }) {
  const [p, setP] = useState(0.5);
  const sliderId = useId();

  const values = payoffs.flatMap((payoff) => [payoff.sunny, payoff.rainy]);
  const yMin = Math.min(0, ...values);
  const yMax = Math.max(...values);
  const x = (prob: number) => PAD.left + prob * (WIDTH - PAD.left - PAD.right);
  const y = (value: number) =>
    PAD.top + ((yMax - value) / (yMax - yMin)) * (HEIGHT - PAD.top - PAD.bottom);

  const best = bestOption(payoffs, p);
  const switchPoints = payoffs
    .flatMap((a, i) => payoffs.slice(i + 1).map((b) => crossover(a, b)))
    .filter((point): point is number => point !== null)
    .filter((point) => {
      const before = bestOption(payoffs, Math.max(0, point - 0.001));
      const after = bestOption(payoffs, Math.min(1, point + 0.001));
      return before.option !== after.option;
    });

  return (
    <figure className="rounded-xl border border-card-border bg-bg p-4 sm:p-6">
      <figcaption className="mb-4 text-sm font-semibold">
        Expected value by probability of sunshine
      </figcaption>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label={`Line chart of expected value against probability of sunshine. Best option changes at ${switchPoints.map(toPercent).join(", ") || "no point"}.`}
      >
        {[yMin, 0, yMax].map((tick) => (
          <g key={tick}>
            <line
              x1={PAD.left}
              x2={WIDTH - PAD.right}
              y1={y(tick)}
              y2={y(tick)}
              stroke="var(--card-border)"
            />
            <text
              x={PAD.left - 8}
              y={y(tick) + 4}
              textAnchor="end"
              fontSize="12"
              fill="var(--muted)"
            >
              ${tick}
            </text>
          </g>
        ))}
        {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
          <text
            key={tick}
            x={x(tick)}
            y={HEIGHT - 12}
            textAnchor="middle"
            fontSize="12"
            fill="var(--muted)"
          >
            {tick * 100}%
          </text>
        ))}
        {switchPoints.map((point) => (
          <line
            key={point}
            x1={x(point)}
            x2={x(point)}
            y1={PAD.top}
            y2={HEIGHT - PAD.bottom}
            stroke="var(--primary)"
            strokeDasharray="4 4"
          />
        ))}
        {payoffs.map((payoff, index) => (
          <line
            key={payoff.option}
            x1={x(0)}
            y1={y(payoff.rainy)}
            x2={x(1)}
            y2={y(payoff.sunny)}
            stroke={COLORS[index % COLORS.length]}
            strokeWidth={payoff.option === best.option ? 3.5 : 2}
            opacity={payoff.option === best.option ? 1 : 0.55}
          />
        ))}
        <line
          x1={x(p)}
          x2={x(p)}
          y1={PAD.top}
          y2={HEIGHT - PAD.bottom}
          stroke="var(--text)"
          strokeOpacity="0.5"
        />
      </svg>

      <label htmlFor={sliderId} className="mt-4 block text-sm">
        Probability of sunshine: <strong className="tabular-nums">{toPercent(p)}</strong>
      </label>
      <input
        id={sliderId}
        type="range"
        min={0}
        max={100}
        step={2.5}
        value={p * 100}
        onChange={(event) => setP(Number(event.target.value) / 100)}
        className="mt-2 w-full accent-primary"
      />

      <ul className="mt-4 grid gap-2 sm:grid-cols-3" aria-live="polite">
        {payoffs.map((payoff, index) => (
          <li
            key={payoff.option}
            className="flex items-center justify-between gap-2 rounded-lg border border-card-border px-3 py-2 text-sm"
          >
            <span className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: COLORS[index % COLORS.length] }}
                aria-hidden
              />
              {payoff.option}
              {payoff.option === best.option && (
                <span className="rounded-full bg-primary px-2 text-[11px] font-bold text-bg">
                  BEST
                </span>
              )}
            </span>
            <span className="tabular-nums">${expectedValue(payoff, p).toFixed(1)}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
