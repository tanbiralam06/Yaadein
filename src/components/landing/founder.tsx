import { siteConfig } from "@/lib/config";
import { MessageCircle } from "lucide-react";

export function Founder() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto dark:bg-secondary bg-ivory rounded-3xl border border-primary/10 overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl">
          <div className="md:w-1/3 bg-primary/20 flex flex-col items-center justify-center py-16 px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-background border-4 border-primary/20 mb-6 flex items-center justify-center overflow-hidden shadow-inner">
                <span className="text-5xl font-serif text-primary">T</span>
              </div>
              <h4 className="text-2xl font-serif font-bold text-primary mb-1">
                {siteConfig.founder.name}
              </h4>
              <p className="text-[10px] uppercase tracking-[0.2em] dark:text-ivory/40 text-secondary/40 font-bold">
                Founder, Ehsaara
              </p>
            </div>
          </div>
          <div className="flex-1 p-12 md:p-20 flex flex-col justify-center dark:text-ivory text-secondary">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Message from the Founder
            </h2>
            <div className="space-y-6 text-lg dark:text-ivory/70 text-secondary/70 font-sans leading-relaxed italic border-l-2 border-primary/20 pl-8">
              <p>&quot;{siteConfig.founder.story}&quot;</p>
              <p>
                &quot;Trust is the foundation of every gift. When you choose
                Ehsaara, you aren&apos;t just buying a service; you are letting
                us be a part of your memory. I personally oversee every order to
                ensure it meets our standard of emotional excellence.&quot;
              </p>
            </div>

            <div className="mt-12">
              <a
                href={siteConfig.whatsapp}
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-ivory font-bold rounded-full hover:shadow-xl transition-all scale-100 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-ivory" />
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
