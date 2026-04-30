import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = (): React.JSX.Element => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl uppercase font-black tracking-tight"
          >
            Technolog Blog
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-3 text-sm text-muted-foreground">
            <Button
              variant="secondary"
              className="hover:text-foreground transition-colors"
              asChild
            >
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </Button>
            <Button
              variant="secondary"
              className="hover:text-foreground transition-colors"
              asChild
            >
              <Link
                href="/blog"
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </Button>
            <Button
              variant="secondary"
              className="hover:text-foreground transition-colors"
              asChild
            >
              <Link href="/blog/create">Create a post</Link>
            </Button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:inline-flex">
              Login
            </Button>

            <Button asChild>
              <Link href="#">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
