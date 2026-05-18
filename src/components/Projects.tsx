"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Play, X, TrendingUp, Zap, Target, ExternalLink, MessageSquare, Database, Search, Shield, FileText, GitBranch, BarChart3, Network, Cpu, Layers } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiSqlalchemy,
  SiOpenai,
  SiReact,
  SiVite,
  SiMui,
  SiRedux,
  SiJavascript,
  SiGooglegemini,
  SiVercel,
  SiEthereum,
  SiSocketdotio,
  SiThirdweb,
  SiNextui,
  SiApacheecharts,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Project = {
  name: string;
  category: string;
  description: string;
  before: string;
  after: string;
  metrics: { value: string; label: string; icon: React.ComponentType<{ className?: string }> }[];
  tech: string[];
  url?: string;
  github?: string;
  video?: string;
  impact?: string;
  accent: string;
};

type TechIcon = IconType | React.ComponentType<{ className?: string }>;
type TechEntry = { Icon: TechIcon; color: string; mono?: boolean };
const techMeta: Record<string, TechEntry> = {
  "Next.js": { Icon: SiNextdotjs, color: "#0A0A0A", mono: true },
  "Next.js 14": { Icon: SiNextdotjs, color: "#0A0A0A", mono: true },
  "Next.js 15": { Icon: SiNextdotjs, color: "#0A0A0A", mono: true },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  Redis: { Icon: SiRedis, color: "#DC382D" },
  WebSockets: { Icon: SiSocketdotio, color: "#0A0A0A", mono: true },
  SQLAlchemy: { Icon: SiSqlalchemy, color: "#C0392B" },
  OpenAI: { Icon: SiOpenai, color: "#10A37F" },
  "React 18": { Icon: SiReact, color: "#61DAFB" },
  Vite: { Icon: SiVite, color: "#646CFF" },
  "React Flow": { Icon: Network, color: "#FF0072" },
  MUI: { Icon: SiMui, color: "#007FFF" },
  "Redux Toolkit": { Icon: SiRedux, color: "#764ABC" },
  Dagre: { Icon: GitBranch, color: "#475569", mono: true },
  ELK: { Icon: Layers, color: "#475569", mono: true },
  Recharts: { Icon: BarChart3, color: "#22C55E" },
  ECharts: { Icon: SiApacheecharts, color: "#AA344D" },
  jsPDF: { Icon: FileText, color: "#E11D48" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  Gemini: { Icon: SiGooglegemini, color: "#4285F4" },
  Vercel: { Icon: SiVercel, color: "#0A0A0A", mono: true },
  thirdweb: { Icon: SiThirdweb, color: "#F213A4" },
  "ethers.js": { Icon: SiEthereum, color: "#627EEA" },
  NextUI: { Icon: SiNextui, color: "#0A0A0A", mono: true },
};
const getTech = (name: string): TechEntry =>
  techMeta[name] ?? { Icon: Cpu, color: "#64748B", mono: true };

const projects: Project[] = [
  {
    name: "Echo",
    category: "AI Chat Platform · Real-time Messaging",
    description: "Team chat platform with servers, channels, and real-time WebSocket messaging — wired with four AI capabilities baked into the message flow: auto-moderation on send, smart reply suggestions, an @AI chatbot member, and one-click channel summarization. Redis pub/sub fans out messages across worker processes; prompt caching keeps latency and cost low.",
    before: "Team chat is dumb pipes. Moderation is manual, threads sprawl, and catching up on a busy channel means scrolling for ten minutes.",
    after: "Messages get moderated before they broadcast. Reply suggestions and @AI live inline. One click summarizes a channel. Real-time scales horizontally via Redis pub/sub.",
    metrics: [
      { value: "WebSockets", label: "Real-time pub/sub", icon: Zap },
      { value: "4 AI", label: "Mod · Replies · @AI · Summary", icon: MessageSquare },
      { value: "Async", label: "FastAPI + SQLAlchemy", icon: Database },
      { value: "Cached", label: "Ephemeral prompt cache", icon: Shield },
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL", "Redis", "WebSockets", "SQLAlchemy", "OpenAI"],
    url: "https://echo-two-azure.vercel.app",
    github: "https://github.com/ankitsingh122/Echo",
    impact: "AI-native team chat — moderation, replies, and summaries in the message loop",
    accent: "#10B981",
  },
  {
    name: "Hornet",
    category: "Blockchain Forensics · On-Chain Intelligence",
    description: "Frontend for an on-chain investigation platform built for analysts and compliance teams. Trace fund flows on an interactive transaction graph, layer geo-IP heatmaps over wallet activity, build dashboards from drag-and-drop widgets, and export case reports — built for case work, not block exploring.",
    before: "Investigations live across explorer tabs, CSV dumps, and screenshots. No way to see fund flow shape, no shared case state, no clean artifact to hand to a stakeholder.",
    after: "Auto-laid-out transaction graphs (React Flow + dagre/ELK). Geo-IP heatmaps over a world map. Multi-chart analytics. One-click PDF/PNG case reports. Investigation as a workspace, not a scavenger hunt.",
    metrics: [
      { value: "React Flow", label: "Fund-flow graphs", icon: Search },
      { value: "Auto-layout", label: "Dagre + ELK", icon: Target },
      { value: "Geo-IP", label: "World-map heatmaps", icon: Database },
      { value: "PDF / PNG", label: "Case-report export", icon: FileText },
    ],
    tech: ["React 18", "Vite", "React Flow", "MUI", "Redux Toolkit", "Dagre", "ELK", "Recharts", "ECharts", "jsPDF"],
    impact: "Investigation surface for on-chain analysts and compliance teams",
    accent: "#F59E0B",
  },
  {
    name: "ACraft",
    category: "Generative AI · Image Pipeline",
    description: "AI image generation that turns a single reference photo into stylized 4K artwork. Auto prompt engineering removes the manual tuning loop. 30+ styles spanning portrait, cyberpunk, fantasy, sci-fi, and abstract — powered by Gemini multimodal.",
    before: "Hiring a designer is slow and expensive. DIY prompting means trial-and-error until the output finally looks right.",
    after: "Upload, pick a style, download. No prompt crafting. 4K output, 30+ aesthetics, instant export. Designer-grade results in seconds.",
    metrics: [
      { value: "4K", label: "Export resolution", icon: Zap },
      { value: "30+", label: "Style presets", icon: Target },
      { value: "Gemini", label: "Multimodal backbone", icon: TrendingUp },
      { value: "One-shot", label: "No prompt tuning", icon: Shield },
    ],
    tech: ["Next.js", "JavaScript", "Gemini", "Vercel"],
    url: "https://acraft-eta.vercel.app",
    github: "https://github.com/ankitsingh122/image-creation",
    impact: "Designer-grade artwork from one photo, no prompting required",
    accent: "#8B5CF6",
  },
  {
    name: "Quorum",
    category: "Web3 · DAO Governance",
    description: "Governance frontend that opens UNI proposal submission beyond whales. Anyone can draft a proposal, share it publicly, and rally delegate support — once it crosses the surfacing threshold, it lands on the main feed. Smart-contract-backed state, transparent vote accounting, built on the Uniswap delegation graph.",
    before: "Only whales with 10M+ UNI votes could submit proposals. Small holders had no path into governance.",
    after: "Anyone can propose. Public sharing rallies delegate support. 400 votes = featured. Governance opened to everyone, not just whales.",
    metrics: [
      { value: "10M → 0", label: "Vote barrier removed", icon: Target },
      { value: "400", label: "Delegates to feature", icon: TrendingUp },
      { value: "UNI", label: "Governance integration", icon: Database },
      { value: "On-chain", label: "Proposal pipeline", icon: Zap },
    ],
    tech: ["Next.js 14", "JavaScript", "thirdweb", "ethers.js", "Tailwind", "NextUI", "Vercel"],
    url: "https://smartcontract-opal.vercel.app",
    github: "https://github.com/ankitsingh122/DAO",
    impact: "Opens UNI governance to everyone, not just whales",
    accent: "#EC4899",
  },
];

const VideoModal = ({
  isOpen,
  onClose,
  videoSrc,
  projectName,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  projectName: string;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 max-md:p-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl w-full bg-white dark:bg-black rounded-2xl overflow-hidden shadow-2xl ring-2 ring-slate-200/50 dark:ring-white/10"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800 text-white hover:bg-slate-700 dark:bg-white/10 dark:hover:bg-white/20 flex items-center justify-center transition-colors hover:scale-105 active:scale-95 max-md:top-3 max-md:right-3 max-md:w-11 max-md:h-11 max-md:min-h-[44px] max-md:min-w-[44px]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative pt-[56.25%] bg-black">
            <video src={videoSrc} controls autoPlay className="absolute inset-0 w-full h-full">
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-white/10">
            <p className="text-sm font-medium text-slate-700 dark:text-gray-300 text-center">{projectName} Demo</p>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Projects = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [currentProjectName, setCurrentProjectName] = useState("");

  const handleVideoOpen = (videoSrc: string, projectName: string) => {
    setCurrentVideo(videoSrc);
    setCurrentProjectName(projectName);
    setVideoOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleVideoClose = () => {
    setVideoOpen(false);
    setCurrentVideo("");
    setCurrentProjectName("");
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    if (!videoOpen) return;
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && handleVideoClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [videoOpen]);

  return (
    <>
      <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 bg-transparent relative overflow-hidden max-md:py-12 max-md:px-4">
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.02] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="mb-14 max-md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-teal-600 dark:text-gray-500 uppercase tracking-wider">
              Full-Stack Engineer · Featured Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-4 max-md:text-2xl max-md:mb-3">
              Production AI Systems
            </h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-lg max-md:text-base">
              Production systems I ship and operate. Measurable outcomes, live in production
            </p>
          </motion.div>

          <div className="space-y-8 dark:space-y-px">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{ ["--accent" as string]: project.accent }}
                className="group relative bg-white dark:bg-black rounded-2xl dark:rounded-none border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-slate-300/80 dark:hover:bg-white/[0.02] dark:border-t dark:first:border-t-0 transition-all duration-300 overflow-hidden hover:-translate-y-0.5 max-md:rounded-xl"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
                  style={{ background: `linear-gradient(180deg, var(--accent), transparent)` }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ background: "var(--accent)" }}
                />
                <div className="p-6 sm:p-8 md:p-10 dark:p-6 sm:dark:p-8 md:dark:p-12 lg:dark:p-16 max-md:p-4 max-md:dark:p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-md:gap-4">
                    <div className="flex-1 min-w-0 space-y-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className="font-heading text-sm font-semibold tabular-nums tracking-widest"
                          style={{ color: "var(--accent)" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                          <span className="text-slate-300 dark:text-white/20">/{String(projects.length).padStart(2, "0")}</span>
                        </span>
                        <span className="h-px w-8 bg-slate-300 dark:bg-white/15" aria-hidden />
                        <span className="text-xs font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white max-md:text-xl">
                        {project.name}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl max-md:text-sm">
                        {project.description}
                      </p>

                      <div className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] overflow-hidden max-md:rounded-lg">
                        <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 dark:divide-white/10">
                          <div className="p-4 sm:p-5 max-md:p-3">
                            <span className="text-[10px] font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-widest">
                              Before
                            </span>
                            <p className="text-sm text-slate-600 dark:text-gray-400 mt-1.5 leading-relaxed">
                              {project.before}
                            </p>
                          </div>
                          <div className="p-4 sm:p-5 max-md:p-3">
                            <span className="text-[10px] font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                              After
                            </span>
                            <p className="text-sm text-slate-700 dark:text-white mt-1.5 leading-relaxed font-medium">
                              {project.after}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-nowrap gap-2 pt-3 max-md:overflow-x-auto max-md:pb-2 max-md:-mx-1 max-md:px-1">
                        {project.metrics.map((m, i) => {
                          const Icon = m.icon;
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-2 shrink-0 whitespace-nowrap rounded-lg bg-slate-100/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 px-3 py-2 transition-colors hover:bg-slate-200/60 dark:hover:bg-white/[0.08] hover:border-slate-300/60 dark:hover:border-white/15 max-md:px-2.5 max-md:py-1.5"
                            >
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-teal-500/10 dark:bg-teal-400/10">
                                <Icon className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">{m.value}</div>
                                <div className="text-[11px] text-slate-500 dark:text-gray-400 leading-tight mt-0.5">{m.label}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="pt-2">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[10px] font-semibold text-slate-400 dark:text-gray-500 uppercase tracking-[0.18em]">
                            Stack
                          </span>
                          <span className="h-px flex-1 bg-slate-200/80 dark:bg-white/10" aria-hidden />
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => {
                            const { Icon, color, mono } = getTech(t);
                            return (
                              <span
                                key={t}
                                title={t}
                                className="inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 text-xs font-medium rounded-md bg-white text-slate-700 border border-slate-200/80 dark:bg-white/[0.03] dark:text-gray-300 dark:border-white/10 transition-colors hover:border-slate-300 dark:hover:border-white/20"
                              >
                                <span
                                  className="inline-flex h-4 w-4 items-center justify-center rounded-[3px]"
                                  style={{ background: mono ? undefined : `${color}1A` }}
                                  aria-hidden
                                >
                                  <Icon
                                    className={
                                      mono
                                        ? "h-3 w-3 text-slate-700 dark:text-white"
                                        : "h-3 w-3"
                                    }
                                    style={mono ? undefined : { color }}
                                  />
                                </span>
                                {t}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 pt-2 max-md:flex-wrap max-md:gap-3 max-md:pt-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-gray-500 dark:hover:text-white transition-colors max-md:min-h-[44px] max-md:items-center"
                          >
                            <Github className="w-4 h-4" /> Source
                          </a>
                        )}
                        {project.video && (
                          <button
                            onClick={() => handleVideoOpen(project.video!, project.name)}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-gray-500 dark:hover:text-white transition-colors"
                            aria-label={`Watch ${project.name} demo`}
                          >
                            <Play className="w-4 h-4" /> Demo
                          </button>
                        )}
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-gray-500 dark:hover:text-white transition-colors"
                            aria-label={`Open ${project.name}`}
                          >
                            <ExternalLink className="w-4 h-4" /> Visit
                          </a>
                        )}
                      </div>
                    </div>
                    {project.video && (
                      <button
                        type="button"
                        onClick={() => handleVideoOpen(project.video!, project.name)}
                        className="flex-shrink-0 w-60 sm:w-72 md:w-80 aspect-video rounded-xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-black/50 ring-1 ring-slate-200/50 dark:ring-white/5 cursor-pointer hover:ring-2 hover:ring-teal-500/50 dark:hover:ring-teal-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black transition-shadow max-md:w-full max-md:min-h-[140px]"
                        aria-label={`Play ${project.name} demo video`}
                      >
                        <video
                          src={project.video}
                          className="w-full h-full object-cover pointer-events-none"
                          muted
                          loop
                          autoPlay
                          playsInline
                          aria-hidden
                        />
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/ankitsingh122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-white font-medium transition-colors"
            >
              View all projects on GitHub <Github className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <VideoModal
        isOpen={videoOpen}
        onClose={handleVideoClose}
        videoSrc={currentVideo}
        projectName={currentProjectName}
      />
    </>
  );
};

export default Projects;
