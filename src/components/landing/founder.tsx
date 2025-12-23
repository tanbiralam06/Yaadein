import { siteConfig } from "@/lib/config";
import { MessageCircle } from "lucide-react";

export function Founder() {
  return (
    <section className="py-24 bg-ivory/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-background rounded-3xl border border-primary/10 overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl shadow-primary/5">
          <div className="md:w-1/3 bg-primary/10 flex items-center justify-center min-h-[300px] relative overflow-hidden">
            {/* Placeholder for Founder Photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-ivory border-4 border-primary/20 mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-serif text-primary">T</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-primary">
                {siteConfig.founder.name}
              </h4>
              <p className="text-xs uppercase tracking-widest text-foreground/40">
                Founder, Yaadein
              </p>
            </div>
          </div>
          <div className="flex-1 p-12 md:p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-serif mb-6 leading-tight">
              A Message from the Founder
            </h2>
            <div className="space-y-6 text-lg text-foreground/70 font-sans leading-relaxed italic">
              <p>&quot;{siteConfig.founder.story}&quot;</p>
              <p>
                &quot;Trust is the foundation of every gift. When you choose
                Yaadein, you aren&apos;t just buying a service; you are letting
                us be a part of your memory. I personally oversee every order to
                ensure it meets our standard of emotional excellence.&quot;
              </p>
            </div>

            <div className="mt-10">
              <a
                href={siteConfig.whatsapp}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:shadow-lg transition-all scale-100 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
