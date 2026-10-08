export function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-[rgba(139,92,246,0.12)] px-3 py-1 text-[13px] font-medium text-primary-soft">
      {children}
    </li>
  );
}

export function TagList({ tags, label }: { tags: readonly string[]; label: string }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {tags.map((tag) => (
        <TagPill key={tag}>{tag}</TagPill>
      ))}
    </ul>
  );
}
