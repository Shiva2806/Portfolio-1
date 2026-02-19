import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { toast } from "@/components/ui/sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const inputFocusClasses =
  "transition-all duration-300 border-white/15 focus-visible:border-cyan-400/60 focus-visible:ring-0 focus-visible:shadow-[0_0_25px_-8px_rgba(34,211,238,0.4)]";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
      toast.success("Message sent successfully.");
    }, 800);
  };

  return (
    <PageLayout>
      <div className="relative pt-44 pb-32 min-h-screen">

        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <h1 className="text-5xl md:text-6xl font-heavy leading-[1.05]">
                Let&apos;s{" "}
                <span className="italic font-serif text-slate-500">
                  Build
                </span>{" "}
                Together
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                If you’re looking to build AI systems, automation workflows, or
                production-ready applications, let’s connect and explore how we
                can create something impactful.
              </p>

              <div className="space-y-6 text-sm text-slate-400 pt-6">
                <div>
                  <span className="uppercase tracking-[0.25em] text-slate-500 text-xs block mb-2">
                    Location
                  </span>
                  Hyderabad, India
                </div>

                <div>
                  <span className="uppercase tracking-[0.25em] text-slate-500 text-xs block mb-2">
                    Email
                  </span>
                  <a
                    href="mailto:dspgyan2806@gmail.com"
                    className="hover:text-cyan-400 transition"
                  >
                    dspgyan2806@gmail.com
                  </a>
                </div>

                <div>
                  <span className="uppercase tracking-[0.25em] text-slate-500 text-xs block mb-2">
                    Phone
                  </span>
                  <a
                    href="tel:+917893662806"
                    className="hover:text-cyan-400 transition"
                  >
                    +91 7893662806
                  </a>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - FORM */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-10">

                <div className="space-y-3">
                  <label className="block text-xs uppercase tracking-[0.25em] text-slate-500">
                    Name
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Your name"
                    className={`bg-transparent text-white placeholder:text-slate-500 ${inputFocusClasses}`}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-xs uppercase tracking-[0.25em] text-slate-500">
                    Email
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="you@example.com"
                    className={`bg-transparent text-white placeholder:text-slate-500 ${inputFocusClasses}`}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-xs uppercase tracking-[0.25em] text-slate-500">
                    Message
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={`bg-transparent text-white placeholder:text-slate-500 resize-none ${inputFocusClasses}`}
                  />
                </div>

                <motion.div
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full py-6 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-xs font-black uppercase tracking-widest border-0 transition-shadow duration-300 shadow-[0_0_30px_-8px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_-6px_rgba(34,211,238,0.35)] disabled:opacity-70"
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </Button>
                </motion.div>

              </form>
            </motion.div>

          </div>
        </div>

        {/* Proper Gap Before Footer */}
        <div className="mt-32">
          <Footer />
        </div>

      </div>
    </PageLayout>
  );
}
