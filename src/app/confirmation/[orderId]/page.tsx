"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, ArrowRight, Home } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function ConfirmationPage() {
  const params = useParams();
  const orderId = params.orderId as string;

  return (
    <div className="min-h-screen bg-ivory/30 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-background rounded-3xl border border-primary/10 shadow-2xl p-8 md:p-12 text-center"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-3xl md:text-4xl font-serif mb-4">
            Request Received!
          </h1>
          <p className="text-foreground/60 font-sans mb-8 leading-relaxed">
            Thank you for sharing your story with us. This is the first step
            towards creating a beautiful memory.
          </p>

          <div className="bg-ivory/50 rounded-2xl p-6 mb-10 border border-primary/5">
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 block mb-1">
              Your Order ID
            </span>
            <span className="text-2xl font-serif font-bold text-primary">
              {orderId}
            </span>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 text-left">
              <h3 className="font-serif font-bold mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                What happens next?
              </h3>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed">
                Our team will review your emotional intent personally. Expect a
                WhatsApp message from us within <strong>2 hours</strong> to
                discuss the gift strategy and next steps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.whatsapp}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-lg transition-all scale-100 hover:scale-105"
              >
                Chat Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/"
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all"
              >
                <Home className="w-4 h-4" />
                Back Home
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
