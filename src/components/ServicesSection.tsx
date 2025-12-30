import { motion } from "framer-motion";
import { Terminal, Layers, Cpu } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Custom AI Agents",
    description:
      "Autonomous agents that reason, plan, and act — from production chat systems to multi-agent architectures.",
    stack: "LangChain • OpenAI • Anthropic",
    Icon: Terminal,
  },
  {
    id: "02",
    title: "Intelligent Web Systems",
    description:
      "AI-first web platforms with search, personalization, and real-time intelligence baked into the core.",
    stack: "Next.js • Python • Vector Databases",
    Icon: Layers,
  },
  {
    id: "03",
    title: "Process Automation",
    description:
      "End-to-end workflow automation using NLP, vision, and decision systems that actually scale.",
    stack: "Computer Vision • NLP • APIs",
    Icon: Cpu,
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#050508] text-white py-40"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-32">
          <span className="text-xs tracking-[0.3em] text-cyan-400 uppercase">
            // Capabilities
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-heavy">
            What I{" "}
            <span className="italic font-serif text-slate-500">
              Build
            </span>
          </h2>
        </div>

        {/* Services */}
        <div className="space-y-48">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40%" }}
              className="max-w-4xl"
            >
              <div className="flex items-start gap-8">
                {/* Index */}
                <div className="text-slate-600 font-mono text-sm pt-2">
                  /{service.id}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <service.Icon className="w-7 h-7 text-cyan-400" />
                    <h3 className="text-3xl md:text-4xl font-heavy">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                    {service.description}
                  </p>

                  <div className="mt-6 text-sm tracking-wide text-slate-500">
                    {service.stack}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
