// src/components/Logo.tsx
const Logo = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Core */}
      <circle cx="50" cy="50" r="10" fill="url(#coreGradient)" />

      {/* Orbit */}
      <path
        d="M20 50a30 30 0 0 1 60 0"
        stroke="url(#orbitGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <defs>
        <linearGradient id="coreGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>

        <linearGradient id="orbitGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
