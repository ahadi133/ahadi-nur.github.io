import Link from "next/link";
import { contactLink, navLinks } from "@/lib/site";

export function Footer({ name }: { name: string }) {
  // Rendered at build time; the site is redeployed often enough for the year.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-bg px-4 py-12 text-center">
      <p className="text-gradient text-lg font-bold tracking-wide uppercase">{name}</p>
      <nav aria-label="Footer" className="mt-5">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[...navLinks, contactLink].map((link) => (
            <li key={link.id}>
              <Link
                href={`/${link.href}`}
                className="text-sm text-text-secondary transition hover:text-primary-soft"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="mt-6 text-sm text-muted">
        © {year} {name}. All Rights Reserved.
      </p>
    </footer>
  );
}
