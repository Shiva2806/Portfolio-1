import { motion } from "framer-motion";
import { Globe, Bot, Zap, Code2, Workflow } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";

const services = [
  {
    id: "01",
    title: "Full-Fledged Website Development",
    description:
      "Functional, production-ready websites built from scratch. Custom designs, responsive layouts, and seamless integrations — including client-facing systems.",
    stack: "Next.js • React • TypeScript • Tailwind",
    Icon: Globe,
  },
  {
    id: "02",
    title: "AI Agents with n8n",
    description:
      "Build intelligent automation agents using n8n. Workflow automation, lead nurturing, data pipelines, and custom integrations that run autonomously.",
    stack: "n8n • OpenAI • Webhooks • APIs",
    Icon: Bot,
  },
  {
    id: "03",
    title: "Custom AI Agents",
    description:
      "Autonomous agents that reason, plan, and act — from production chat systems to multi-agent architectures.",
    stack: "LangChain • OpenAI • Anthropic",
    Icon: Zap,
  },
  {
    id: "04",
    title: "Business Process Automation",
    description:
      "End-to-end workflow automation using NLP, vision, and decision systems that scale and operate reliably.",
    stack: "Computer Vision • NLP • APIs",
    Icon: Workflow,
  },
  {
    id: "05",
    title: "Web & API Integration",
    description:
      "Connect your systems. CRM integrations, payment gateways, third-party APIs, and custom backend solutions.",
    stack: "REST • GraphQL • Webhooks",
    Icon: Code2,
  },
];

export default function Services() {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-40">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-28 text-5xl md:text-6xl font-heavy tracking-tight"
          >
            What I{" "}
            <span className="italic font-serif text-slate-500">
              Build
            </span>
          </motion.h1>

          {/* Timeline Container */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden md:block" />

            <div className="space-y-32">
              {services.map((service, i) => {
                const Icon = service.Icon;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.08,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="relative flex flex-col md:flex-row gap-10 md:gap-16"
                  >
                    {/* Number Column */}
                    <div className="relative flex items-start md:w-[120px]">
                      <div className="relative z-10 text-slate-700 font-mono text-lg md:text-xl">
                        {service.id}
                      </div>

                      {/* Dot */}
                      <div className="absolute left-[18px] top-[10px] w-2 h-2 bg-cyan-400 rounded-full hidden md:block" />
                    </div>

                    {/* Content */}
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-4 mb-6">
                        <Icon className="w-6 h-6 text-cyan-400" />
                        <h2 className="text-3xl md:text-4xl font-heavy tracking-tight">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-slate-400 text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="text-sm tracking-wide text-slate-500">
                        {service.stack}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
