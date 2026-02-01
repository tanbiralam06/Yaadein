"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-40 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <span className="inline-block px-4 py-1.5 mb-8 text-xs md:text-sm font-medium tracking-wider uppercase text-primary border border-primary/20 rounded-full bg-primary/5">
          Kolkata&quot;s First Emotional Gifting Service
        </span>
        <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1]">
          Preserve Memories, <br />
          <span className="text-primary italic">One Heartfelt Gift</span> at a
          Time.
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
          Ehsaara helps you craft meaningful gifts that speak volumes. Tell us
          your story, and we&quot;ll design the perfect emotion.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            href="/plan-a-gift"
            className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 scale-100 hover:scale-105 active:scale-95"
          >
            Plan a Gift
          </Link>
          {/* <a
            href={siteConfig.whatsapp}
            className="px-10 py-4 bg-secondary text-ivory font-bold rounded-lg hover:bg-secondary/90 transition-all duration-300 scale-100 hover:scale-105 active:scale-95"
          >
            Talk to Founder
          </a> */}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 mb-4 font-bold">
          Scroll to discover
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </div>
  );
}
