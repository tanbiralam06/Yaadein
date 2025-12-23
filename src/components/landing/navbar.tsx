"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-primary/10 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-serif font-bold tracking-tight text-primary"
        >
          Yaadein
        </Link>
        <div className="hidden md:flex gap-8 items-center font-sans text-sm font-medium">
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
            className="px-5 py-2.5 bg-primary text-ivory rounded-full hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
