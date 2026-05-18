"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set("[data-anim]", { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.set("[data-word]", { yPercent: 110, opacity: 0 });
      gsap.set("[data-fade]", { opacity: 0, y: 16 });
      gsap.set("[data-stat]", { opacity: 0, y: 14 });
      gsap.set("[data-cta]", { opacity: 0, y: 12 });
      gsap.set("[data-photo]", { clipPath: "inset(0 0 100% 0)", opacity: 0 });
      gsap.set("[data-photo-img]", { scale: 1.15 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.to("[data-fade='badge']", { opacity: 1, y: 0, duration: 0.7 })
        .to("[data-fade='kicker']", { opacity: 1, y: 0, duration: 0.6 }, "-=0.45")
        .to(
          "[data-word]",
          { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.08 },
          "-=0.4"
        )
        .to(
          "[data-photo]",
          { clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 1.1, ease: "power4.out" },
          "-=0.95"
        )
        .to(
          "[data-photo-img]",
          { scale: 1, duration: 1.6, ease: "power3.out" },
          "<"
        )
        .to("[data-fade='subtitle']", { opacity: 1, y: 0, duration: 0.6 }, "-=0.75")
        .to("[data-fade='lede']", { opacity: 1, y: 0, duration: 0.7 }, "-=0.45")
        .to(
          "[data-stat]",
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power3.out" },
          "-=0.4"
        )
        .to(
          "[data-cta]",
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.09, ease: "power3.out" },
          "-=0.3"
        );

      gsap.to("[data-ribbon]", {
        rotate: "+=6",
        yPercent: 2,
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "50% 50%",
      });

      gsap.to("[data-pulse]", {
        scale: 1.6,
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
        repeat: -1,
      });

      const ctas = gsap.utils.toArray<HTMLAnchorElement>("[data-magnet]");
      const cleanups: Array<() => void> = [];
      ctas.forEach((el) => {
        const arrow = el.querySelector<HTMLElement>("[data-arrow]");
        const onEnter = () => arrow && gsap.to(arrow, { x: 6, duration: 0.4, ease: "power3.out" });
        const onLeave = () => arrow && gsap.to(arrow, { x: 0, duration: 0.4, ease: "power3.out" });
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
      });
      return () => cleanups.forEach((fn) => fn());
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:pt-28 lg:pb-24 bg-white dark:bg-black relative overflow-hidden max-md:min-h-[100dvh] max-md:items-start max-md:pt-[4.25rem] max-md:pb-10"
    >
      <div className="absolute inset-0 pointer-events-none z-0 dark:hidden max-md:hidden">
        <svg
          data-ribbon
          className="absolute w-[180%] h-[180%] right-0 top-1/2 -translate-y-1/2"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMaxYMid meet"
          style={{ transform: "rotate(-10deg)" }}
        >
          <defs>
            <linearGradient id="ribbon-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path
            d="M 700 0 L 800 100 C 650 300 450 450 200 550 C -50 650 -150 600 -100 500 L 100 300 C 300 350 500 250 700 0 Z"
            fill="url(#ribbon-light)"
          />
        </svg>
      </div>
      <div className="absolute inset-0 pointer-events-none z-0 hidden dark:block max-md:hidden">
        <svg
          data-ribbon
          className="absolute w-[180%] h-[180%] right-0 top-1/2 -translate-y-1/2"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMaxYMid meet"
          style={{ transform: "rotate(-10deg)" }}
        >
          <defs>
            <linearGradient id="ribbon-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#27272a" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#18181b" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path
            d="M 700 0 L 800 100 C 650 300 450 450 200 550 C -50 650 -150 600 -100 500 L 100 300 C 300 350 500 250 700 0 Z"
            fill="url(#ribbon-dark)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-md:gap-6">
          <div className="space-y-6 lg:space-y-10 order-2 lg:order-1 max-md:space-y-4">
            <div data-fade="badge" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm max-w-full">
              <span className="relative inline-flex w-1.5 h-1.5 shrink-0">
                <span data-pulse className="absolute inset-0 rounded-full bg-emerald-500/60" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-medium tracking-wide text-slate-600 dark:text-white uppercase">
                Available for full-time · Early-stage startups · Remote
              </span>
            </div>

            <div className="space-y-2 lg:space-y-3">
              <p data-fade="kicker" className="text-xs sm:text-sm font-medium text-slate-500 dark:text-white tracking-wide">
                Ankit Singh · Full-Stack Engineer
              </p>
              <h1 className="font-heading text-3xl sm:text-6xl md:text-7xl lg:text-[4.25rem] xl:text-[4.75rem] font-semibold text-slate-900 dark:text-white leading-[1.12] tracking-[-0.02em] max-md:text-3xl max-md:leading-tight">
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-word className="inline-block will-change-transform">Building</span>
                </span>
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-word className="inline-block will-change-transform text-teal-600 dark:text-teal-400">AI &amp; Web3</span>
                </span>
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-word className="inline-block will-change-transform dark:text-white">Systems</span>
                </span>
              </h1>
              <p data-fade="subtitle" className="text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                Frontends that hold up under real load.
              </p>
            </div>

            <p data-fade="lede" className="text-sm lg:text-base text-slate-600 dark:text-white leading-relaxed max-w-lg font-normal max-md:text-sm max-md:leading-relaxed">
              Frontend-heavy full-stack engineer at Hornet, shipping the analyst surface of an on-chain investigation platform — transaction graphs, geo-IP heatmaps, and case workflows built to stay legible under real load. On the side I build LLM and Web3 products that exercise the same muscles: Echo (real-time AI chat), Quorum (UNI governance), and ACraft (Gemini-powered image generation). Owning features from system design through deploy.
            </p>

            <div className="flex flex-nowrap gap-6 lg:gap-10 py-4 lg:py-6 border-y border-slate-200/60 dark:border-white/[0.06] max-md:gap-4 max-md:py-3 max-md:overflow-x-auto max-md:-mx-4 max-md:px-4">
              <div data-stat className="shrink-0">
                <div className="font-heading text-lg lg:text-xl font-semibold text-slate-900 dark:text-white tabular-nums">4 AI</div>
                <div className="text-xs lg:text-sm text-slate-500 dark:text-white/90 mt-0.5 whitespace-nowrap">In-flow capabilities <span className="text-slate-400 dark:text-white/60">· Echo</span></div>
              </div>
              <div data-stat className="shrink-0">
                <div className="font-heading text-lg lg:text-xl font-semibold text-slate-900 dark:text-white tabular-nums">React Flow</div>
                <div className="text-xs lg:text-sm text-slate-500 dark:text-white/90 mt-0.5 whitespace-nowrap">Fund-flow graphs <span className="text-slate-400 dark:text-white/60">· Hornet</span></div>
              </div>
              <div data-stat className="shrink-0">
                <div className="font-heading text-lg lg:text-xl font-semibold text-slate-900 dark:text-white tabular-nums">10M → 0</div>
                <div className="text-xs lg:text-sm text-slate-500 dark:text-white/90 mt-0.5 whitespace-nowrap">Vote barrier removed <span className="text-slate-400 dark:text-white/60">· Quorum</span></div>
              </div>
              <div data-stat className="shrink-0">
                <div className="font-heading text-lg lg:text-xl font-semibold text-slate-900 dark:text-white tabular-nums">30+</div>
                <div className="text-xs lg:text-sm text-slate-500 dark:text-white/90 mt-0.5 whitespace-nowrap">AI style presets <span className="text-slate-400 dark:text-white/60">· ACraft</span></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1 lg:pt-0 max-md:flex-col max-md:w-full">
              <a
                href="#contact"
                data-cta
                data-magnet
                className="inline-flex items-center justify-center gap-2 px-5 py-3 lg:px-6 lg:py-3.5 bg-teal-600 text-white rounded-xl text-sm lg:text-base font-semibold hover:bg-teal-700 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition-colors duration-200 max-md:w-full max-md:py-3.5 max-md:min-h-[48px]"
              >
                Let&apos;s Build Something
                <ArrowRight data-arrow className="w-4 h-4" aria-hidden />
              </a>
              <a
                href="/Ankit_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cta
                className="inline-flex items-center justify-center px-5 py-3 lg:px-6 lg:py-3.5 border-2 border-slate-300 dark:border-white/20 rounded-xl text-sm lg:text-base font-semibold text-slate-700 dark:text-white hover:border-teal-500 hover:text-teal-600 dark:hover:border-white/30 dark:hover:bg-white/5 transition-colors duration-200 max-md:w-full max-md:py-3.5 max-md:min-h-[48px]"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end z-10 max-md:max-w-[280px] max-md:mx-auto max-md:w-full max-md:mb-2">
            <div data-photo className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.08] shadow-xl mx-auto lg:mx-0 max-md:max-w-[240px] max-md:min-h-[300px]">
              <Image
                data-photo-img
                src="/ankit.jpg"
                alt="Ankit Singh - Full Stack Engineer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 240px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
