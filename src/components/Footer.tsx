const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-20 px-5 pb-8 sm:px-6">
      <div className="mx-auto max-w-2xl">
        {/* Cinematic strip */}
        <div className="relative h-40 overflow-hidden rounded-2xl border border-border">
          <svg
            viewBox="0 0 800 200"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="fsky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a1430" />
                <stop offset="100%" stopColor="#16202e" />
              </linearGradient>
              <radialGradient id="fmoon" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f4f1e4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f4f1e4" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="800" height="200" fill="url(#fsky)" />
            {[
              [80, 40], [200, 30], [320, 55], [460, 28], [560, 60], [700, 35],
              [140, 70], [400, 45], [640, 70], [260, 80],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i % 2 ? 1.2 : 0.8} fill="#dfe6f5" opacity={0.8} />
            ))}
            <circle cx="170" cy="60" r="50" fill="url(#fmoon)" />
            <circle cx="170" cy="60" r="22" fill="#f3efe1" />
            <path d="M0 150 L150 130 L300 152 L460 125 L620 150 L800 132 L800 200 L0 200 Z" fill="#0b1320" />
            <g fill="#04070d" transform="translate(560 150) scale(0.8)">
              <ellipse cx="14" cy="12" rx="15" ry="4" />
              <path d="M0 12 q2 -7 7 -8 l3 -4 q2 -3 5 -1 l2 4 q4 1 5 6 l-2 0 q-1 -3 -4 -4 l-1 4 l3 5 l-3 0 l-3 -5 l-6 0 l-3 5 l-3 0 l3 -6 q-3 -1 -4 -4 z" />
            </g>
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-sm text-white/90">
              Built by{" "}
              <span className="font-semibold text-white">Ankit Singh</span>. The
              source code is available on{" "}
              <a
                href="https://github.com/ankitsingh122/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline decoration-white/40 underline-offset-2 hover:decoration-white"
              >
                GitHub
              </a>
              .
            </p>
            <p className="mt-2 font-mono text-[11px] text-white/60">
              © {new Date().getFullYear()} Ankit Singh — Full-Stack Engineer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
