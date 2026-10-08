"use client";

import Image, { type StaticImageData } from "next/image";
import { Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Modal } from "./Modal";

type LightboxProps = {
  image: StaticImageData;
  alt: string;
  title: string;
  sizes: string;
  className?: string;
};

/** Thumbnail button that opens the full-size image in a dialog. */
export function Lightbox({ image, alt, title, sizes, className }: LightboxProps) {
  return (
    <Modal
      size="xl"
      title={title}
      trigger={
        <button
          type="button"
          className={cn(
            "group relative block w-full overflow-hidden rounded-2xl",
            className,
          )}
          aria-label={`Enlarge image: ${title}`}
        >
          <Image
            src={image}
            alt={alt}
            sizes={sizes}
            placeholder="blur"
            className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute right-3 bottom-3 rounded-full bg-bg/80 p-2 text-text opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 size={16} aria-hidden />
          </span>
        </button>
      }
    >
      <Image src={image} alt={alt} sizes="100vw" className="h-auto w-full rounded-xl" />
    </Modal>
  );
}
