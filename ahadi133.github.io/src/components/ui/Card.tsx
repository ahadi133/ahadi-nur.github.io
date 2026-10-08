import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"div"> & { interactive?: boolean };

export function Card({ className, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-card-border bg-card p-6 backdrop-blur-sm sm:p-8",
        interactive &&
          "transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_32px_-8px_var(--primary)]",
        className,
      )}
      {...props}
    />
  );
}
