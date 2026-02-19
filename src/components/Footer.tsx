import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/Shiva2806",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shivagyan/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/shivagyan.28/",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative min-h-[70vh] flex flex-col justify-between"
    >
      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* CTA */}
      <div className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="group text-center"
        >
          <Link to="/contact" className="block">
            <h2 className="font-heavy text-[12vw] md:text-[10vw] leading-[0.9] tracking-tight text-white">
              LET’S
            </h2>

            <h2 className="font-heavy text-[12vw] md:text-[10vw] leading-[0.9] tracking-tight text-white relative">
              BUILD
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </h2>

            <div className="mt-8 text-xs uppercase tracking-[0.3em] text-cyan-400/70 group-hover:text-cyan-300 transition">
              Get in touch →
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-12 py-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-mono tracking-wider text-white/40">
            © 2026 SHIVA.DEV
          </span>

          <span className="text-[10px] font-mono tracking-wider text-white/40">
            LOCAL TIME — {currentTime}
          </span>

          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono tracking-wider text-white/40 hover:text-cyan-300 transition"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
