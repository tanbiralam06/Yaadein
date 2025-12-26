import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12 font-sans text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
          Refund & Cancellation Policy
        </h1>

        <div className="mb-16 p-6 bg-secondary/5 border-l-4 border-primary rounded-r-lg">
          <h2 className="text-xl font-serif mb-3 text-foreground italic">
            Our Philosophy
          </h2>
          <p className="font-sans text-foreground/80 leading-relaxed italic">
            At Yaadein, every gift begins with time, thought, and emotional
            effort. Our policies are designed to be fair, transparent, and
            respectful—to both our customers and the people crafting their
            memories.
          </p>
        </div>

        <div className="space-y-16 font-sans text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base">
                1
              </span>
              Service Fee (Standard / Premium / Signature)
            </h2>
            <div className="space-y-4">
              <p className="font-bold text-foreground text-lg italic underline decoration-primary/30 underline-offset-4">
                Is the service fee refundable?
              </p>
              <p className="font-semibold text-foreground/90">
                Short answer: No, once work has begun.
              </p>
              <p>The service fee covers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Emotional consultation</li>
                <li>Personal curation</li>
                <li>Planning and coordination effort</li>
              </ul>
              <p>
                Once a gift plan is finalized and you approve us to proceed, the
                service fee becomes non-refundable, as work begins immediately.
              </p>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm">
                  <strong className="text-primary uppercase tracking-wider text-xs block mb-1">
                    Trust Builder Tip:
                  </strong>
                  If you cancel before approving the gift plan and before any
                  execution begins, no payment is required.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base">
                2
              </span>
              Gift / Product Cost
            </h2>
            <div className="space-y-4">
              <p className="font-bold text-foreground text-lg italic underline decoration-primary/30 underline-offset-4">
                What about the gift item cost?
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gift item costs are always shared with you in advance</li>
                <li>We purchase items only after your explicit approval</li>
              </ul>
              <p className="font-semibold text-foreground/90 mt-6">
                Once items are purchased:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  They may be non-refundable, depending on the vendor or item
                  type
                </li>
                <li>
                  If cancellation happens:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>
                      Any recoverable amount from vendors will be returned to
                      you
                    </li>
                    <li>
                      Non-recoverable costs (custom items, perishable goods,
                      special orders) cannot be refunded
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base">
                3
              </span>
              Cancellation by Customer
            </h2>
            <div className="grid gap-6">
              <div className="border border-secondary/10 p-5 rounded-xl">
                <p className="font-bold text-foreground mb-2">
                  Before approving the gift plan
                </p>
                <p className="text-sm">No charges apply.</p>
              </div>
              <div className="border border-secondary/10 p-5 rounded-xl">
                <p className="font-bold text-foreground mb-2">
                  After paying service fee, before purchase
                </p>
                <p className="text-sm">
                  Service fee is non-refundable, no product cost charged.
                </p>
              </div>
              <div className="border border-secondary/10 p-5 rounded-xl bg-foreground/[0.02]">
                <p className="font-bold text-foreground mb-2">
                  After product purchase
                </p>
                <p className="text-sm">
                  Service fee + any non-recoverable product costs apply.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base">
                4
              </span>
              Rescheduling & Changes
            </h2>
            <p className="mb-4">We understand plans can change.</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">Minor changes</p>
                <p className="text-sm text-foreground/60">
                  (date, message text, packaging preference)
                </p>
                <p className="mt-2 pl-4 border-l-2 border-primary/20">
                  Allowed at no extra cost if informed in advance.
                </p>
              </div>
              <div>
                <p className="font-bold text-foreground">Major changes</p>
                <p className="text-sm text-foreground/60">
                  (new occasion, new recipient, new concept)
                </p>
                <p className="mt-2 pl-4 border-l-2 border-primary/20">
                  May require an additional service fee depending on effort
                  involved. We’ll always communicate this clearly before
                  proceeding.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base">
                5
              </span>
              Same-Day & Urgent Orders
            </h2>
            <div className="p-5 bg-amber-500/5 border border-amber-500/20 rounded-xl">
              <p className="font-bold text-foreground mb-2 uppercase tracking-wide text-xs">
                Important Clause
              </p>
              <p>
                For same-day or urgent deliveries: Once execution begins, no
                cancellations or refunds are possible. This is due to immediate
                sourcing, coordination, and delivery commitments.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base">
                6
              </span>
              If Yaadein Is Unable to Deliver
            </h2>
            <p>
              In rare cases where we are unable to deliver due to operational
              issues, unforeseen circumstances, or availability constraints:
            </p>
            <p className="font-bold text-primary mt-4 py-2 px-4 bg-primary/5 inline-block rounded-lg">
              Any amount paid will be fully refunded, or adjusted as per your
              preference.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base">
                7
              </span>
              How Refunds Are Processed
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Approved refunds are processed via the original payment method
              </li>
              <li>
                Timeline: <strong>5–7 working days</strong>
              </li>
            </ul>
          </section>

          <section className="pt-10">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-serif text-foreground italic">
                A Human Promise
              </h2>
              <div className="max-w-xl mx-auto space-y-4">
                <p className="text-lg">
                  We’re not a marketplace. We’re humans planning something
                  meaningful for you.
                </p>
                <p>
                  If something feels unfair or unclear, talk to us. We aim to
                  resolve concerns with empathy, not fine print.
                </p>
                <a
                  href="https://wa.me/919330404130"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all scale-100 hover:scale-105 active:scale-95 mt-8"
                >
                  <MessageCircle className="w-5 h-5" />
                  Talk to Us on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-24 pt-8 border-t border-secondary/10 text-xs text-foreground/40 font-sans uppercase tracking-widest text-center">
          Last Updated: December 26, 2025
        </div>
      </div>
    </main>
  );
}
