import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-secondary text-ivory/60 border-t border-primary/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-ivory/5 pb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif text-primary font-bold mb-2">
              Yaadein
            </h2>
            <p className="font-sans text-sm tracking-wide">
              Crafting Emotions into Memories.
            </p>
          </div>
          <div className="flex gap-8 font-sans text-sm">
            <Link
              href="#how-it-works"
              className="hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link
              href="/plan-a-gift"
              className="hover:text-primary transition-colors"
            >
              Plan a Gift
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 text-xs font-sans tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Yaadein. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/refund-policy"
              className="hover:text-primary transition-colors"
            >
              Refund Policy
            </Link>
          </div>
          <p>Handcrafted for Kolkata ❤️</p>
        </div>
      </div>
    </footer>
  );
}
