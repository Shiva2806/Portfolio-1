import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";

export const Navigation = () => {
  const location = useLocation();
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
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
      <Link
        to="/"
        className="pointer-events-auto absolute left-10 top-0 hover:scale-105 transition-transform duration-300"
      >
        <Logo />
      </Link>
    
      {/* TEXT-ONLY NAV */}
      <div className="pointer-events-auto mx-auto w-fit flex items-center gap-28">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`relative px-4 py-2 text-[12px] uppercase tracking-[0.4em] transition-colors duration-300 ${
                isActive ? "text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm shadow-[0_0_20px_-5px_rgba(34,211,238,0.15),0_0_20px_-5px_rgba(147,51,234,0.1)]"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  aria-hidden
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};
