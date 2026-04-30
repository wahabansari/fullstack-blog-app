import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-black tracking-tight uppercase">
              Technolog Blog
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Sharing ideas, insights, and stories.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

        </div>

        {/* Divider */}
        <Separator className="my-8" />

        {/* Bottom */}
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MyBlog. All rights reserved. Built with Next.js.
        </p>

      </div>
    </footer>
  );
};