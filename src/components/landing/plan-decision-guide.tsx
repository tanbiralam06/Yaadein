"use client";

import { useState } from "react";
import { HelpCircle, X } from "lucide-react";

export function PlanDecisionGuide() {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowGuide(true)}
        className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-sans font-semibold group"
      >
        <HelpCircle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        Which plan should you choose?
      </button>

      {/* Modal Overlay */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-secondary/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowGuide(false)}
          />

          <div className="relative bg-background border border-secondary/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowGuide(false)}
              className="absolute top-6 right-6 p-2 hover:bg-secondary/5 rounded-full transition-colors text-foreground/70 hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-10">
              <h3 className="text-2xl font-serif mb-2 text-foreground">
                Which plan should you choose?
              </h3>
              <p className="text-foreground/60 font-sans text-sm">
                A quick guide to help you decide in under a minute.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#A1887F]" />
                  <h4 className="font-bold font-serif text-foreground/90">
                    Standard if:
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-foreground/70 font-sans list-disc pl-4 marker:text-[#A1887F]">
                  <li>You have a clear occasion</li>
                  <li>You want something thoughtful but simple</li>
                  <li>You need help choosing the right gift</li>
                  <li>Budget matters, but emotion still counts</li>
                </ul>
                <p className="text-xs text-foreground/50 italic font-sans pt-2">
                  Perfect for birthdays, thank-you gestures, and simple
                  surprises.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FBC02D]" />
                  <h4 className="font-bold font-serif text-foreground/90">
                    Premium if:
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-foreground/70 font-sans list-disc pl-4 marker:text-[#FBC02D]">
                  <li>This gift carries emotional weight</li>
                  <li>You care about presentation and storytelling</li>
                  <li>You want a guided conversation</li>
                  <li>You want it to feel special, not generic</li>
                </ul>
                <p className="text-xs text-foreground/50 italic font-sans pt-2">
                  Ideal for anniversaries, close relationships, and meaningful
                  moments.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F57C00]" />
                  <h4 className="font-bold font-serif text-foreground/90">
                    Signature if:
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-foreground/70 font-sans list-disc pl-4 marker:text-[#F57C00]">
                  <li>This moment cannot go wrong</li>
                  <li>You want white-glove handling</li>
                  <li>Multiple elements or surprises are involved</li>
                  <li>You want to hand over everything</li>
                </ul>
                <p className="text-xs text-foreground/50 italic font-sans pt-2">
                  Designed for once-in-a-lifetime memories.
                </p>
              </div>
            </div>

            <p className="text-center text-sm font-sans text-foreground/70 border-t border-foreground/5 pt-8">
              Still unsure?{" "}
              <span className="font-bold text-primary">Start with Premium</span>{" "}
              — we’ll guide you to the right fit during our call.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
