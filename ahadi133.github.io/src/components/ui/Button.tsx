import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline";

export function buttonClasses(variant: Variant = "solid", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    variant === "solid"
      ? "bg-primary text-bg hover:brightness-110 hover:shadow-[0_0_24px_-6px_var(--primary)]"
      : "border-2 border-text text-text hover:border-primary hover:text-primary-soft",
    className,
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  variant?: Variant;
  external?: boolean;
};

export function ButtonLink({
  href,
  variant = "solid",
  external = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }
  // Client-side routing only for app paths; hashes and mailto stay plain anchors.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
