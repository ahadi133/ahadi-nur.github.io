import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center bg-grid px-4 pt-[var(--nav-height)] text-center">
      <p className="text-sm font-semibold tracking-[0.25em] text-primary-soft uppercase">
        Error 404
      </p>
      <h1 className="mt-4 text-gradient text-5xl font-extrabold sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back to home
      </ButtonLink>
    </section>
  );
}
