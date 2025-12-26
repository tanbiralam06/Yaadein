"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is the gift cost included in the pricing?",
    a: "No. Our Standard, Premium, and Signature prices cover emotional curation, planning, and execution. The actual cost of gift items is shared transparently and billed at actuals only after your approval.",
  },
  {
    q: "How do I pay for the service?",
    a: "Payment is requested only after your gift plan is finalized and approved. You can pay securely via UPI or bank transfer.",
  },
  {
    q: "Do you only deliver in Kolkata?",
    a: "Currently, we deliver within Kolkata city limits to ensure quality and attention to detail. We plan to expand to other cities soon.",
  },
  {
    q: "What if I don't know what to gift?",
    a: "That’s exactly why we exist. You only need to share the emotion and details about the person. We’ll thoughtfully propose 2–3 meaningful gift ideas for you to choose from.",
  },
  {
    q: "Can you deliver on the same day?",
    a: "Same-day delivery is available under our Premium and Signature plans for requests submitted before 12 PM, subject to availability within Kolkata.",
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
