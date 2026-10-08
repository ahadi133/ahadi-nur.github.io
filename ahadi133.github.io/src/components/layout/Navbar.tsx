"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contactLink, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useActiveSection } from "./useActiveSection";

const sectionIds = [...navLinks.map((link) => link.id), contactLink.id];

export function Navbar({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition duration-300",
        scrolled || open ? "bg-bg/85 shadow-lg backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[var(--nav-height)] max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link href="/#top" className="text-lg font-bold tracking-wide uppercase">
          {name}
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavItem href={`/${link.href}`} active={active === link.id}>
                {link.label}
              </NavItem>
            </li>
          ))}
          <li className="ml-3">
            <Link
              href={`/${contactLink.href}`}
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-bg transition hover:brightness-110"
            >
              {contactLink.label}
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-text lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-card-border bg-bg/95 px-4 pb-6 lg:hidden"
      >
        <ul className="flex flex-col gap-1 pt-3">
          {[...navLinks, contactLink].map((link) => (
            <li key={link.id}>
              <NavItem href={`/${link.href}`} active={active === link.id} onClick={close}>
                {link.label}
              </NavItem>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

type NavItemProps = {
  href: string;
  active: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

function NavItem({ href, active, onClick, children }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "location" : undefined}
      className={cn(
        "block rounded-md px-3 py-2 text-sm font-medium transition",
        active ? "text-primary-soft" : "text-text-secondary hover:text-text",
      )}
    >
      {children}
    </Link>
  );
}
