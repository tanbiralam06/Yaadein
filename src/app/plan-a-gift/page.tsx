"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Send, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const sections = [
  { id: "occasion", title: "The Occasion" },
  { id: "receiver", title: "Receiver Details" },
  { id: "emotion", title: "The Emotion" },
  { id: "budget", title: "Budget" },
  { id: "delivery", title: "Delivery Info" },
  { id: "contact", title: "Your Contact" },
];

export default function PlanAGiftPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    occasion: "",
    otherOccasion: "",
    receiverAge: "",
    relationship: "",
    otherRelationship: "",
    likes: "",
    dislikes: "",
    emotion: "",
    budget: "₹1,000–₹2,000",
    message: "",
    tone: "Emotional",
    locality: "",
    date: "",
    userName: "",
    userPhone: "",
    userEmail: "",
  });

  const router = useRouter();

  const handleNext = () => {
    if (step < sections.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        router.push(`/confirmation/${result.orderId}`);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting request. Please check your connection.");
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-ivory/30 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-background rounded-3xl border border-primary/10 shadow-2xl overflow-hidden relative">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary/5">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${((step + 1) / sections.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="p-8 md:p-12">
            <header className="mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                Step {step + 1} of {sections.length}
              </span>
              <h1 className="text-3xl font-serif">{sections[step].title}</h1>
            </header>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[300px]"
                >
                  {step === 0 && (
                    <div className="space-y-6">
                      <p className="text-foreground/60 font-sans">
                        What are we celebrating today?
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Birthday",
                          "Anniversary",
                          "Apology",
                          "Surprise",
                          "New Beginnings",
                          "Other",
                        ].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => updateField("occasion", opt)}
                            className={`p-4 text-sm font-medium rounded-xl border transition-all ${
                              formData.occasion === opt
                                ? "bg-primary text-white border-primary"
                                : "bg-background border-primary/10 hover:border-primary/40"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {formData.occasion === "Other" && (
                        <input
                          type="text"
                          placeholder="Please specify..."
                          className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none bg-ivory/10"
                          value={formData.otherOccasion}
                          onChange={(e) =>
                            updateField("otherOccasion", e.target.value)
                          }
                        />
                      )}
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                            Age
                          </label>
                          <input
                            type="number"
                            placeholder="e.g. 25"
                            className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none"
                            value={formData.receiverAge}
                            onChange={(e) =>
                              updateField("receiverAge", e.target.value)
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                            Relationship
                          </label>
                          <select
                            className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none bg-background capitalize"
                            value={formData.relationship}
                            onChange={(e) =>
                              updateField("relationship", e.target.value)
                            }
                          >
                            <option value="">Select...</option>
                            {[
                              "Parent",
                              "Partner",
                              "Sibling",
                              "Friend",
                              "Colleague",
                              "Other",
                            ].map((r) => (
                              <option key={r} value={r}>
                                {r}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                          Likes & Interests
                        </label>
                        <textarea
                          placeholder="What makes them smile? (books, colors, flowers, etc.)"
                          className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none min-h-[100px]"
                          value={formData.likes}
                          onChange={(e) => updateField("likes", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                          The Intent
                        </label>
                        <textarea
                          placeholder="What do you want them to feel when they receive this gift?"
                          className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none min-h-[120px]"
                          value={formData.emotion}
                          onChange={(e) =>
                            updateField("emotion", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                          The Message
                        </label>
                        <textarea
                          placeholder="Any specific note or message?"
                          className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none min-h-[100px]"
                          value={formData.message}
                          onChange={(e) =>
                            updateField("message", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-8">
                      <p className="text-foreground/60 font-sans">
                        Select a budget range for the gift (excluding service
                        fee).
                      </p>
                      <div className="space-y-3">
                        {["₹500–₹1,000", "₹1,000–₹2,000", "₹2,000+"].map(
                          (b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => updateField("budget", b)}
                              className={`w-full p-5 text-left font-medium rounded-xl border transition-all flex items-center justify-between ${
                                formData.budget === b
                                  ? "bg-primary/5 border-primary shadow-sm"
                                  : "bg-background border-primary/10 hover:border-primary/40"
                              }`}
                            >
                              <span>{b}</span>
                              {formData.budget === b && (
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                              )}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                          Locality in Kolkata
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Salt Lake, Sector V"
                          className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none"
                          value={formData.locality}
                          onChange={(e) =>
                            updateField("locality", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                          Desired Date
                        </label>
                        <input
                          type="date"
                          className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none"
                          value={formData.date}
                          onChange={(e) => updateField("date", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none"
                          value={formData.userName}
                          onChange={(e) =>
                            updateField("userName", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                          Phone (WhatsApp)
                        </label>
                        <input
                          type="tel"
                          placeholder="Your WhatsApp number"
                          className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none"
                          value={formData.userPhone}
                          onChange={(e) =>
                            updateField("userPhone", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60 uppercase tracking-wider">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full p-4 rounded-xl border border-primary/10 focus:border-primary outline-none"
                          value={formData.userEmail}
                          onChange={(e) =>
                            updateField("userEmail", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <footer className="mt-12 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 0}
                  className={`flex items-center gap-2 font-medium transition-colors ${
                    step === 0
                      ? "text-foreground/20"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>

                {step === sections.length - 1 ? (
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    Submit Request
                    <Send className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 bg-secondary text-ivory font-bold rounded-full hover:bg-secondary/90 transition-all shadow-lg"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </footer>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
