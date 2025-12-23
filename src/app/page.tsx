import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { Founder } from "@/components/landing/founder";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      <section
        id="how-it-works"
        className="py-24 bg-secondary text-ivory relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-serif mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Share Your Story",
                desc: "Fill out our emotional planning form with details about the receiver and the occasion.",
              },
              {
                step: "02",
                title: "Human Consultation",
                desc: "Our founder reviews your request and connects with you via WhatsApp to refine the idea.",
              },
              {
                step: "03",
                title: "Heartfelt Delivery",
                desc: "We execute the gift personally in Kolkata, ensuring every detail captures the intended emotion.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-10 bg-ivory/[0.03] backdrop-blur-sm rounded-3xl border border-ivory/[0.08] hover:border-primary/30 transition-all duration-500 group text-left"
              >
                <span className="text-4xl font-serif text-primary/40 group-hover:text-primary transition-colors mb-6 block font-bold">
                  {item.step}
                </span>
                <h3 className="text-2xl font-bold mb-4 font-serif text-ivory">
                  {item.title}
                </h3>
                <p className="text-ivory/60 leading-relaxed font-sans text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-yaadein" className="py-24">
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
