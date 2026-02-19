import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";

const liveProjects = [
  {
    id: 1,
    title: "DEZHYNE",
    subtitle: "CLIENT WEBSITE — DIGITAL AGENCY",
    description:
      "Production-ready website for Dezhyne, a digital agency providing website and automation services. Built with modern stack for performance and scalability.",
    tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND"],
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

const comingSoonProjects = [
  {
    id: 3,
    title: "AI LEAD AUTOMATION AGENT",
    subtitle: "N8N WORKFLOW AUTOMATION",
    description:
      "Autonomous lead capture, qualification, and nurturing pipeline powered by n8n and AI.",
  },
  {
    id: 4,
    title: "PROJECT X",
    subtitle: "COMING SOON",
    description: "Next big system currently in development.",
  },
];

export default function Projects() {
  return (
    <PageLayout>
      <div className="relative">

        {/* Minimal Intro */}
        <div className="pt-40 pb-24 max-w-7xl mx-auto px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heavy tracking-tight"
          >
            Selected{" "}
            <span className="italic font-serif text-slate-500">
              Projects
            </span>
          </motion.h1>
        </div>

        {/* Cinematic Fullscreen Sections */}
        <div className="space-y-0">
          {liveProjects.map((project, index) => (
            <section
              key={project.id}
              className="relative h-[100vh] w-full overflow-hidden flex items-center"
            >
              {/* Background Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {/* Subtitle */}
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-400/80 mb-6">
                    {project.subtitle}
                  </p>

                  {/* Title */}
                  <h2 className="text-[clamp(3rem,8vw,6rem)] font-heavy leading-[0.95] tracking-tight text-white mb-6">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-white/20 text-slate-200 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white hover:text-cyan-400 transition"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </section>
          ))}
        </div>

        {/* Pipeline Section */}
        <div className="pt-32 pb-40 max-w-7xl mx-auto px-6 md:px-12">
          <h3 className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-16">
            In The Pipeline
          </h3>

          <div className="space-y-16">
            {comingSoonProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="border-b border-white/10 pb-12"
              >
                <h4 className="text-3xl md:text-4xl font-heavy mb-3 text-slate-200">
                  {project.title}
                </h4>

                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/70 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-slate-500 max-w-2xl">
                  {project.description}
                </p>

                <div className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Coming Soon
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </PageLayout>
  );
}
