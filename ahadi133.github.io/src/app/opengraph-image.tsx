import { profile } from "@/content/profile";
import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = `${profile.name} — ${profile.role}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: profile.role,
    title: profile.tagline,
    footer: `${profile.name} · ${profile.location}`,
  });
}
