"use client";

import { Children, useState, type ReactNode } from "react";
import { buttonClasses } from "@/components/ui/Button";

type SeeMoreListProps = {
  as?: "div" | "ul";
  buttonContainerClassName?: string;
  children: ReactNode;
  className?: string;
  initialCount?: number;
};

export function SeeMoreList({
  as = "div",
  buttonContainerClassName,
  children,
  className,
  initialCount = 3,
}: SeeMoreListProps) {
  const [expanded, setExpanded] = useState(false);
  const items = Children.toArray(children);
  const visibleItems = items.slice(0, initialCount);
  const hiddenItems = items.slice(initialCount);

  const button = hiddenItems.length > 0 && (
    <button
      type="button"
      className={buttonClasses(
        "outline",
        "mx-auto mt-8 w-fit focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-[0.98]",
      )}
      aria-expanded={expanded}
      onClick={() => setExpanded((isExpanded) => !isExpanded)}
    >
      {expanded ? "Show less" : "See more"}
    </button>
  );

  if (as === "ul") {
    return (
      <ul className={className}>
        {visibleItems}
        {button && <li className={buttonContainerClassName}>{button}</li>}
        {expanded && hiddenItems}
      </ul>
    );
  }

  return (
    <div className={className}>
      {visibleItems}
      {button}
      {expanded && hiddenItems}
    </div>
  );
}
