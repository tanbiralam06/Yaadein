"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is the gift cost included in the pricing?",
    a: "No. Our pricing (Standard/Premium/Signature) is the service fee for curation, planning, and execution. The actual cost of the gift items will be shared with you and billed at actuals after your approval.",
  },
  {
    q: "How do I pay for the service?",
    a: "We follow a manual trust-based flow. Once you submit the form and we finalize the plan on WhatsApp, you can pay via UPI or Bank Transfer.",
  },
  {
    q: "Do you only deliver in Kolkata?",
    a: "Yes, for the MVP, we are exclusively focused on delivering high-quality emotional gifting experiences within Kolkata city limits.",
  },
  {
    q: "What if I don't know what to gift?",
    a: "That's exactly why we're here! You just need to share the emotion and details about the person. We will brainstorm and propose 2-3 unique gift strategies for you to choose from.",
  },
  {
    q: "Can you deliver on the same day?",
    a: "Same-day delivery is available under our Premium and Signature plans, provided the request is submitted before 12 PM local time.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-serif mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-primary/10 rounded-2xl overflow-hidden bg-ivory/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-serif font-bold text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-foreground/60 font-sans leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
