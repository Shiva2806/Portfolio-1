'use client';

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DEZHYNE",
    subtitle: "AI-DRIVEN WEBSITE & AUTOMATION PLATFORM",
    description:
      "Designed and developed a production-ready website and AI-enabled workflows for Dezhyne, a digital agency providing website and automation services.",
    tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "OPENAI"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&h=900&fit=crop",
    link: "https://dezhyne.com",
  },
  {
    id: 2,
    title: "FITHUB",
    subtitle: "AI FITNESS ASSISTANT",
    description:
      "Personal AI fitness assistant with live, in-app workout guidance — allowing users to train directly inside the application.",
    tech: ["AI AGENTS", "REACT", "API INTEGRATION"],
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1600&h=900&fit=crop",
    link: "https://fithub-ai.vercel.app/",
  },
];

export const WorkSection = () => {
  return (
    <section
  id="projects"
  className="relative px-6 md:px-12 lg:px-20 py-32
             bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(56,189,248,0.08),transparent_60%),linear-gradient(135deg,#020205_0%,#07040f_45%,#0b0618_100%)]"
  >

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-xs uppercase tracking-[0.35em] text-cyan-400/70 font-bold">
          SELECTED WORK
        </span>

        <h2 className="mt-4 text-[clamp(2.5rem,6vw,4rem)] font-heavy uppercase tracking-tight text-slate-100 leading-tight">
          PROJECTS THAT <br />
          <span className="text-slate-500">SHIP</span>
        </h2>
      </motion.div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
          >
            <div className="aspect-[16/9] relative overflow-hidden">
              {/* IMAGE */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/95 via-[#020205]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* CONTENT */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heavy uppercase tracking-tight text-slate-100">
                      {project.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-400/70 mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-200" />
                </div>

                <p className="text-sm text-slate-300 max-w-lg mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded-full
                                 border border-white/10 text-slate-300 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* VIEW ALL CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 flex justify-center"
      >
        <a
          href="/projects"
          className="text-xs uppercase tracking-[0.35em] text-slate-300 hover:text-white transition-colors"
        >
          View all projects →
        </a>
      </motion.div>
    </section>
  );
};
