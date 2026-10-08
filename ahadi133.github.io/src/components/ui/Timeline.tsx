import type { Experience } from "@/types/content";

export function Timeline({ items }: { items: readonly Experience[] }) {
  return (
    <ol className="relative ml-2 border-l-2 border-primary/40">
      {items.map((item) => (
        <li
          key={`${item.company}-${item.role}`}
          className="relative pb-10 pl-8 last:pb-0"
        >
          <span
            className="absolute top-1.5 -left-[9px] h-4 w-4 rounded-full bg-primary ring-4 ring-bg-light"
            aria-hidden
          />
          <h4 className="text-lg font-bold">{item.role}</h4>
          <p className="font-medium text-primary-soft">{item.company}</p>
          <p className="mt-1 text-sm text-muted">
            {item.period} · {item.meta}
          </p>
          <p className="mt-3 leading-relaxed text-text-secondary">{item.summary}</p>
        </li>
      ))}
    </ol>
  );
}
