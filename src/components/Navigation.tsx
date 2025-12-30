'use client';

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Logo from "@/components/Logo";

export const Navigation = () => {
  const navLinks = [
    { name: "HOME", href: "#home"},
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 80) {
      // scrolling down
      setHidden(true);
    } else {
      // scrolling up
      setHidden(false);
    }
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: hidden ? 0 : 1,
        y: hidden ? -30 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-8 left-0 w-full z-50 pointer-events-none"
    >
      {/* LOGO */}
      <a
        href="#"
        className="
          pointer-events-auto
          absolute left-10 top-0
          hover:scale-105
          transition-transform
          duration-300
        "
      >
        <Logo />
      </a>
    
      {/* TEXT-ONLY NAV */}
      <div
        className="
          pointer-events-auto
          mx-auto
          w-fit
          flex items-center
          gap-28
        "
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="
              relative
              text-[12px]
              uppercase
              tracking-[0.4em]
              text-slate-300
              hover:text-white
              transition-colors
              duration-300
              group
            "
          >
            {link.name}

            {/* Underline indicator */}
            <span
              className="
                absolute
                left-1/2
                -bottom-3
                h-[1px]
                w-0
                bg-gradient-to-r from-cyan-400 to-purple-500
                group-hover:w-full
                group-hover:left-0
                transition-all
                duration-300
              "
            />
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
