// TODO(Ahadi): replace with the real address after the first Vercel deploy
// (or your custom domain). Used for canonical URLs, the sitemap and OG images.
export const siteUrl = "https://ahadi-portfolio.vercel.app";

export const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#analysis-work", label: "Analysis Work", id: "analysis-work" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#certificates", label: "Certificates", id: "certificates" },
] as const;

export const contactLink = { href: "#contact", label: "Contact", id: "contact" } as const;
