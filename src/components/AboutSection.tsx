import { motion } from "framer-motion";
import Profile from "@/assets/Profile.jpg";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-12 lg:px-20 bg-[#050508] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE — diagonal in (top-left → center) */}
        <motion.div
          initial={{ opacity: 0, x: -160, y: 120 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <img
            src={Profile}
            alt="Shiva"
            className="w-full max-w-md mx-auto rounded-[2rem] object-cover blur-[8px]"
          />

          {/* very subtle glass depth (NO BORDER) */}
          <div className="absolute inset-0 rounded-[2rem] bg-black/10 backdrop-blur-sm pointer-events-none" />
        </motion.div>

        {/* TEXT — diagonal in (bottom-right → center) */}
        <motion.div
          initial={{ opacity: 0, x: 160, y: -120 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
        >
          <span className="block text-xs font-mono uppercase tracking-[0.35em] text-cyan-400 mb-4">
            // About Me
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heavy leading-[1.05] mb-8">
            I build{" "}
            <span className="italic font-serif text-slate-400">
              real-world AI systems
            </span>
            , not demos.
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-6 font-sans">
            I’m Shiva — an AI Agent Developer focused on building production-ready
            systems that automate real workflows.
          </p>

          <p className="text-slate-500 text-base leading-relaxed font-sans max-w-xl">
            From autonomous agents to intelligent web platforms, I care about
            systems that scale, ship, and actually get used.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
