"use client";

const howItWorks = [
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
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-serif mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((item, idx) => (
            <div
              key={idx}
              className="p-10 dark:bg-secondary bg-ivory rounded-3xl border border-primary/10 hover:border-primary/30 transition-all duration-500 shadow-xl group text-left"
            >
              <span className="text-4xl font-serif text-primary/40 group-hover:text-primary transition-colors mb-6 block font-bold">
                {item.step}
              </span>
              <h3 className="text-2xl font-bold mb-4 font-serif dark:text-ivory text-secondary">
                {item.title}
              </h3>
              <p className="dark:text-ivory/60 text-secondary/60 leading-relaxed font-sans text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
