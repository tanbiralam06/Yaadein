import { siteConfig } from "@/lib/config";
import { Check } from "lucide-react";
import Link from "next/link";
import { PlanDecisionGuide } from "./plan-decision-guide";

const plans = [
  {
    name: "Standard",
    price: "₹499",
    tagline: "Emotional Consultation & Curation",
    features: [
      "15-min WhatsApp Consultation",
      "Manual Gift Selection",
      "Standard Hand-written Note",
      "For simple yet meaningful moments",
      "Execution in 48 hours",
      "Gift cost not included",
    ],
  },
  {
    name: "Premium",
    price: "₹999",
    tagline: "Deep Storytelling & Premium Packaging",
    features: [
      "30-min Video/Voice Call",
      "Custom Gift Strategy",
      "Premium Stationery & Wax Seal",
      "When emotion and presentation both matter",
      "Same-day Execution (Kolkata Only)",
      "Gift cost not included",
    ],
    featured: true,
  },
  {
    name: "Signature",
    price: "₹1,999",
    tagline: "The Ultimate Emotional Experience",
    features: [
      "Unlimited Consultation",
      "Multi-part Gifting Flow",
      "Video Message Integration",
      "For once-in-a-lifetime memories",
      "VIP Concierge Delivery",
      "Gift cost not included",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif mb-4">Transparent Pricing</h2>
          <p className="text-foreground/60 font-sans">
            Our service fee covers the emotional curation, manual effort, and
            trust. The gift cost is billed separately at actuals.
          </p>
          <PlanDecisionGuide />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border ${
                plan.featured
                  ? "border-primary bg-primary/5 shadow-xl scale-105 relative z-10"
                  : "border-primary/10 bg-background"
              } transition-all duration-300`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Loved
                </span>
              )}
              <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-serif font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-sm text-foreground/40 font-sans uppercase tracking-widest">
                  Service Fee
                </span>
              </div>
              <p className="text-sm text-foreground/60 mb-8 font-sans leading-relaxed min-h-[40px]">
                {plan.tagline}
              </p>

              <ul className="space-y-4 mb-8 font-sans text-sm">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3 text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/plan-a-gift"
                className={`w-full block text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.featured
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-secondary text-ivory hover:bg-secondary/90"
                }`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/50 mt-12 font-sans italic">
          *Most gifts are thoughtfully finalized within the very first call.
        </p>
      </div>
    </section>
  );
}
