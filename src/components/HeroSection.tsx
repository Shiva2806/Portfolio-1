'use client';

import { motion, useMotionValue, useTransform } from "framer-motion";
import Spline from "@splinetool/react-spline";

const capabilityPoints = [
  "PRODUCTION-READY AI AGENTS",
  "BUSINESS WORKFLOW AUTOMATION",
  "AI SYSTEMS BEYOND COLLEGE PROJECTS",
];

export const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orbX = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);
  const orbY = useTransform(mouseY, [-0.5, 0.5], [-14, 14]);

  return (
    <section
      onMouseMove={(e) => {
        const { innerWidth, innerHeight } = window;
        mouseX.set(e.clientX / innerWidth - 0.5);
        mouseY.set(e.clientY / innerHeight - 0.5);
      }}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 lg:pt-0"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#020205] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,_rgba(76,29,149,0.14),rgba(2,2,5,1))] pointer-events-none z-0" />
      <div className="absolute bottom-[-25%] left-[-15%] w-[900px] h-[900px] bg-cyan-900/20 rounded-full blur-[200px] pointer-events-none z-0" />
      <div className="absolute top-[-25%] right-[-15%] w-[900px] h-[900px] bg-purple-900/20 rounded-full blur-[200px] pointer-events-none z-0" />

      {/* GRID */}
      <div className="w-[95%] max-w-[1800px] grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-20 relative z-10">

        {/* LEFT */}
        <div className="flex flex-col justify-center px-6 md:px-12">

          {/* Identity */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.35em] text-cyan-400/70 font-bold mb-6"
          >
            AI AGENT DEVELOPER · AUTOMATION ENGINEER
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-heavy uppercase tracking-tight text-slate-500 leading-[0.9] text-[clamp(2.5rem,9vw,6.5rem)]"
          >
            HI, I&apos;M
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="font-heavy uppercase leading-[0.9] tracking-tight ml-1 md:ml-2 
                       text-[clamp(3rem,10vw,8rem)]
                       bg-gradient-to-r from-slate-100 via-purple-50 to-cyan-50 bg-clip-text text-transparent"
          >
            SHIVA GYAN
          </motion.h1>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              mt-6 max-w-xl
              text-sm md:text-base
              uppercase
              tracking-[0.18em] md:tracking-[0.25em]
              text-slate-300
            "
          >
            Crafting autonomous AI agents for production-scale automation
          </motion.p>

          {/* CAPABILITY POINTS */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.4 },
              },
            }}
            className="mt-10 flex flex-col gap-4"
          >
            {capabilityPoints.map((point, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="
                  flex items-center gap-3
                  text-[11px] md:text-xs
                  tracking-[0.18em] md:tracking-[0.28em]
                  text-slate-300
                "
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(147,51,234,0.5)]">
              Contact Me
            </button>

            <button className="px-6 py-3 rounded-full border border-white/15 text-xs font-black uppercase tracking-widest text-slate-200 hover:bg-white/5 transition">
              View Projects
            </button>
          </motion.div>
        </div>

        {/* RIGHT (ORB) */}
        <div className="relative w-full h-[420px] lg:h-full flex items-center justify-center order-last lg:order-none">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.32)_0%,_rgba(34,211,238,0.12)_35%,_rgba(2,2,5,0)_70%)] blur-[80px]" />
          </div>

          <motion.div
            style={{ x: orbX, y: orbY }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Spline
              className="w-full h-full"
              scene="https://prod.spline.design/4IjYuueyltQNsr6d/scene.splinecode"
            />

            {/* 🔒 Spline watermark cover */}
            <div className="absolute bottom-4 right-4 w-[140px] h-[40px] bg-[#020205] z-50 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
