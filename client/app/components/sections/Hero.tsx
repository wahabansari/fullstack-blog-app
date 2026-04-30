import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HeroBanner = (): React.JSX.Element => {
  return (
    <section className="relative border-b bg-background">
      {/* Grid Background (Tailwind-only) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-18">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground">
            🚀 Built with Next.js
          </div>

          {/* Heading */}

          <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight text-balance">
            Share Your Ideas with the World
          </h1>

          {/* Subheading */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-7 not-first:mt-6">
            A modern platform to write, explore, and grow your knowledge. Build
            your presence with clean and impactful content.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button size="lg" asChild>
              <Link href="/blog">Explore Blog</Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/blog/create">Start Writing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
