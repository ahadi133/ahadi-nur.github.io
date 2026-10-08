/** Joins truthy class names. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Splits `text` around the first occurrence of `highlight`. */
export function splitHighlight(text: string, highlight: string) {
  const index = text.indexOf(highlight);
  if (index === -1) return { before: text, match: "", after: "" };
  return {
    before: text.slice(0, index),
    match: highlight,
    after: text.slice(index + highlight.length),
  };
}
