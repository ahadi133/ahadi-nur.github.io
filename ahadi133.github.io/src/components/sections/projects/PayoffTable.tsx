import type { Payoff } from "@/types/content";

const money = (value: number) => (value < 0 ? `−$${Math.abs(value)}` : `$${value}`);

export function PayoffTable({ payoffs }: { payoffs: readonly Payoff[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-card-border">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">
          Payoff for each location and weather outcome
        </caption>
        <thead className="bg-bg text-primary-soft">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold">
              Location
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              If sunny
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              If rainy
            </th>
          </tr>
        </thead>
        <tbody>
          {payoffs.map((payoff) => (
            <tr key={payoff.option} className="border-t border-card-border">
              <th scope="row" className="px-4 py-3 font-medium">
                {payoff.option}
              </th>
              <td className="px-4 py-3 tabular-nums">{money(payoff.sunny)}</td>
              <td className="px-4 py-3 tabular-nums">{money(payoff.rainy)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
