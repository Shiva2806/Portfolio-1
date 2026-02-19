import { motion } from "framer-motion";
import Profile from "@/assets/Profile.jpg";
import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-40">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">

          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="block text-xs font-mono uppercase tracking-[0.35em] text-cyan-400 mb-8"
          >
            // About Me
          </motion.span>

          {/* Manifesto Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heavy leading-[1.05] tracking-tight mb-10"
          >
            I build{" "}
            <span className="italic font-serif text-slate-400">
              real-world AI systems
            </span>{" "}
            <br className="hidden md:block" />
            not demos.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-6"
          >
            I’m Shiva Gyan — an AI Agent Developer and Automation Engineer
            focused on building production-ready systems that automate real workflows.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-500 text-base leading-relaxed max-w-2xl mx-auto mb-16"
          >
            From autonomous agents and n8n-powered automations to intelligent
            web platforms, I care about systems that scale, ship, and actually
            get used. I build full-fledged, functional websites and AI agents
            that solve real business problems.
          </motion.p>

          {/* Centered Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative max-w-md mx-auto mb-16"
          >
            <img
              src={Profile}
              alt="Shiva Gyan"
              className="w-full rounded-[2rem] object-cover shadow-2xl"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#06070d]/30 to-transparent pointer-events-none" />
          </motion.div>

          {/* Skill Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <span className="text-xs uppercase tracking-[0.25em] px-5 py-2 rounded-full border border-white/15 text-slate-300 hover:border-cyan-400/40 transition">
              AI Agent Developer
            </span>
            <span className="text-xs uppercase tracking-[0.25em] px-5 py-2 rounded-full border border-white/15 text-slate-300 hover:border-purple-400/40 transition">
              Web Development
            </span>
            <span className="text-xs uppercase tracking-[0.25em] px-5 py-2 rounded-full border border-white/15 text-slate-300 hover:border-cyan-400/40 transition">
              n8n Automation
            </span>
          </motion.div>

        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
