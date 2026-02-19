import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Global atmospheric background — deep navy base + subtle blurred orbs.
 * Fixed, full viewport. Layered, not flat. No heavy gradient.
 */
const PageBackground = () => (
  <div className="fixed inset-0 min-h-screen -z-10" aria-hidden>
    {/* Base — deep dark navy, not pure black */}
    <div className="absolute inset-0 bg-[#06070d]" />
    {/* Cyan glow — top left */}
    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
    {/* Purple glow — bottom right */}
    <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />
    {/* Optional soft neutral glow — center */}
    <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-slate-400/5 rounded-full blur-[120px] pointer-events-none" />
  </div>
);

export const PageLayout = ({ children, className = "" }: PageLayoutProps) => (
  <main
    className={`relative w-full min-h-screen text-white overflow-x-hidden selection:bg-cyan-400/20 selection:text-cyan-200 ${className}`}
  >
    <PageBackground />
    {children}
  </main>
);
