export function StatChips({ stats }: { stats: readonly string[] }) {
  if (stats.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Key numbers">
      {stats.map((stat) => (
        <li
          key={stat}
          className="rounded-md border border-highlight/30 px-2.5 py-1 text-xs font-semibold text-highlight tabular-nums"
        >
          {stat}
        </li>
      ))}
    </ul>
  );
}
