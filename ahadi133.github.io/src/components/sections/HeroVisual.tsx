"use client";

import dynamic from "next/dynamic";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

const DESKTOP_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

type HeroVisualProps = {
  photo: StaticImageData;
  name: string;
  scene?: string;
};

/** Spline scene on large screens when configured; otherwise photo on a glowing orb. */
export function HeroVisual({ photo, name, scene }: HeroVisualProps) {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    if (!scene) return;
    const query = window.matchMedia(DESKTOP_QUERY);
    const update = () => setShowScene(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [scene]);

  if (scene && showScene) {
    return (
      <div className="relative h-[520px] w-full">
        <Spline scene={scene} />
      </div>
    );
  }

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div
        className="absolute inset-[6%] animate-orb rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--primary-soft),var(--primary)_45%,var(--secondary)_80%)] opacity-90 shadow-[0_0_120px_-10px_var(--primary)]"
        aria-hidden
      />
      <div className="absolute inset-0 animate-float overflow-hidden rounded-full">
        <Image
          src={photo}
          alt={`Portrait of ${name}`}
          priority
          sizes="(min-width: 1024px) 420px, 80vw"
          className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain"
        />
      </div>
    </div>
  );
}
