import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { Founder } from "@/components/landing/founder";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />

      <section id="why-ehsaara" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-serif mb-6 leading-tight">
                Beyond a Gift, <br />A Memory That Lasts.
              </h2>
              <p className="text-lg text-foreground/70 mb-8 font-sans leading-relaxed">
                Most platforms focus on logistics. We focus on the{" "}
                <span className="text-primary italic font-serif">why</span>.
                Whether it&apos;s an apology that needs to feel sincere or a
                birthday that needs to feel magical, we are your partners in
                emotion.
              </p>
              <ul className="space-y-4 font-sans text-foreground/80">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Personalized storytelling for every gift
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Hand-written emotional notes
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Execution by people who care, not just delivery boys
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full aspect-square bg-primary/5 rounded-3xl border border-primary/10 flex items-center justify-center p-12 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
              <div className="relative z-10 text-center">
                <blockquote className="text-2xl font-serif italic text-primary/80 mb-6">
                  &quot;It wasn&apos;t just the cake, it was the way they
                  delivered my apology. It felt real.&quot;
                </blockquote>
                <cite className="font-sans text-sm font-semibold uppercase tracking-widest text-foreground/40">
                  — Happy Client
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <Founder />
      <FAQ />
      <Footer />
    </main>
  );
}
