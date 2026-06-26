"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Mail,
  CalendarDays,
  Github,
  Linkedin,
  Twitter,
  FileText,
  BadgeCheck,
  Clock,
  ArrowRight,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const socials = [
  { label: "GitHub", href: "https://github.com/ankitsingh122", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ankitsingh122/", Icon: Linkedin },
  { label: "Twitter", href: "https://github.com/ankitsingh122", Icon: Twitter },
  { label: "Resume", href: "/Ankit_Singh_Resume.pdf", Icon: FileText },
];

/* Original night-sky scene — moon, stars, mountain ridge, lone rider. */
const NightScene = () => (
  <svg
    viewBox="0 0 800 300"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 h-full w-full"
    aria-hidden
  >
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a1530" />
        <stop offset="45%" stopColor="#14233f" />
        <stop offset="100%" stopColor="#1b2a3a" />
      </linearGradient>
      <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f4f1e4" stopOpacity="0.9" />
        <stop offset="35%" stopColor="#e7e2cf" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#e7e2cf" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="ridge" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c1422" />
        <stop offset="100%" stopColor="#060b14" />
      </linearGradient>
    </defs>
    <rect width="800" height="300" fill="url(#sky)" />
    {/* stars */}
    {[
      [60, 40], [120, 80], [200, 30], [260, 70], [330, 50], [420, 25],
      [480, 90], [540, 45], [600, 75], [680, 35], [740, 65], [90, 120],
      [380, 100], [700, 110], [150, 55], [560, 110], [640, 20], [40, 90],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.4 : 0.9} fill="#dfe6f5" opacity={0.8} />
    ))}
    {/* moon */}
    <circle cx="610" cy="80" r="64" fill="url(#moonGlow)" />
    <circle cx="610" cy="80" r="30" fill="#f3efe1" />
    <circle cx="624" cy="72" r="30" fill="url(#sky)" opacity="0.55" />
    {/* far ridge */}
    <path d="M0 230 L120 200 L240 225 L360 195 L520 220 L660 190 L800 215 L800 300 L0 300 Z" fill="#0f1a2b" opacity="0.7" />
    {/* near ridge */}
    <path d="M0 260 L160 235 L300 258 L440 230 L600 255 L800 238 L800 300 L0 300 Z" fill="url(#ridge)" />
    {/* lone rider silhouette */}
    <g fill="#04070d" transform="translate(150 244) scale(0.9)">
      <ellipse cx="14" cy="14" rx="16" ry="5" />
      <path d="M0 14 q2 -8 8 -9 l3 -4 q2 -3 5 -1 l2 4 q5 1 6 7 l-2 0 q-1 -4 -5 -5 l-1 5 l4 5 l-3 0 l-4 -5 l-6 0 l-3 5 l-3 0 l3 -6 q-3 -1 -4 -5 z" />
    </g>
  </svg>
);

const Clk = () => {
  const [t, setT] = useState("00.00.00");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const p = (n: number) => String(n).padStart(2, "0");
      setT(`${p(d.getHours())}.${p(d.getMinutes())}.${p(d.getSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-clock text-sm font-black tabular-nums text-white/85 drop-shadow">
      {t}
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-20 sm:pt-24">
      {/* Banner */}
      <div
        className="reveal relative h-48 w-full overflow-hidden rounded-2xl border border-border sm:h-60"
        style={{ animationDelay: "0ms" }}
      >
        <NightScene />
        <div className="absolute bottom-3 right-4">
          <Clk />
        </div>
      </div>

      {/* Identity row: avatar + name + buttons */}
      <div className="relative flex items-start justify-between">
        <div className="flex items-end gap-4">
          <div
            className="reveal -mt-12 h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-background bg-background shadow-md sm:h-28 sm:w-28"
            style={{ animationDelay: "80ms" }}
          >
            <Image
              src="/ankit.jpg"
              alt="Ankit Singh"
              width={112}
              height={112}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="reveal pb-1" style={{ animationDelay: "120ms" }}>
            <h1 className="flex items-center gap-1.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-[26px]">
              Ankit Singh
              <BadgeCheck className="h-5 w-5 text-[#1d9bf0]" aria-hidden />
            </h1>
            <div className="mt-0.5 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Full-Stack Engineer</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                <Clock className="h-3 w-3" /> 1y 2m
              </span>
            </div>
          </div>
        </div>

        <div className="reveal mt-3 flex items-center gap-1.5" style={{ animationDelay: "160ms" }}>
          <a
            href="#projects"
            aria-label="Browse work"
            className="flex h-9 items-center gap-1 rounded-md border border-border bg-card px-2 font-mono text-[11px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <span className="text-xs">⌘</span>K
          </a>
          <ThemeToggle />
        </div>
      </div>

      {/* Tagline + bullets */}
      <div className="reveal mt-5" style={{ animationDelay: "200ms" }}>
        <p className="text-[15px] font-medium text-foreground">
          Engineer / Builder. I build interfaces that hold up under real load.
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-2.5 text-[14px] leading-relaxed text-muted-foreground">
            <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
            Shipping production-grade frontends from UI to data layer.
          </li>
          <li className="flex gap-2.5 text-[14px] leading-relaxed text-muted-foreground">
            <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
            Currently building{" "}
            <span className="font-medium text-foreground">Hornet</span>&nbsp;and
            shipping LLM &amp; Web3 products on the side.
          </li>
        </ul>
      </div>

      {/* CTAs */}
      <div className="reveal mt-5 flex flex-col gap-2.5 sm:flex-row" style={{ animationDelay: "240ms" }}>
        <a
          href="mailto:ankitsinghasingh007@gmail.com?subject=Intro%20call"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <CalendarDays className="h-4 w-4" />
          Book an intro call
        </a>
        <a
          href="mailto:ankitsinghasingh007@gmail.com"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          <Mail className="h-4 w-4" />
          Send an email
        </a>
      </div>

      {/* Socials */}
      <p className="reveal mt-6 font-mono text-xs text-muted-foreground" style={{ animationDelay: "280ms" }}>
        here are my socials and resume
      </p>
      <div className="reveal mt-2 flex flex-wrap items-center gap-1.5" style={{ animationDelay: "300ms" }}>
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
