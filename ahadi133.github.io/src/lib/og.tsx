import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgCardProps = { eyebrow: string; title: string; footer: string };

/** Dark/violet social preview card shared by the home and project OG images. */
export function renderOgCard({ eyebrow, title, footer }: OgCardProps) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background:
          "radial-gradient(circle at 85% 30%, rgba(139,92,246,0.45), transparent 55%), #131314",
        color: "#ffffff",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#c4b5fd" }}>
        {eyebrow.toUpperCase()}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 40 ? 64 : 80,
          fontWeight: 800,
          lineHeight: 1.08,
          maxWidth: 1000,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 28 }}>
        <div style={{ width: 56, height: 8, borderRadius: 4, background: "#8b5cf6" }} />
        <div style={{ display: "flex", color: "#e0e0e0" }}>{footer}</div>
      </div>
    </div>,
    ogSize,
  );
}
