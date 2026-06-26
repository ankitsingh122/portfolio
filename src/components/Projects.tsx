"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./Skills";

type Project = {
  name: string;
  featured?: boolean;
  status: "Live" | "Building";
  blurb: string;
  gradient: string;
  image?: string;
  url?: string;
  github?: string;
};

const projects: Project[] = [
  {
    name: "Echo",
    featured: true,
    status: "Live",
    blurb:
      "AI-native team chat — real-time WebSocket messaging with moderation, smart replies, an @AI member, and one-click channel summaries.",
    gradient: "linear-gradient(135deg, #0f766e 0%, #10b981 100%)",
    image: "/echo-preview.png",
    url: "https://echoo-mauve.vercel.app",
    github: "https://github.com/ankitsingh122/Echo",
  },
  {
    name: "Hornet",
    status: "Live",
    blurb:
      "Frontend for an on-chain investigation platform — fund-flow graphs, geo-IP heatmaps, and exportable case reports for analysts.",
    gradient: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
    image: "/hornet-preview.png",
    url: "https://www.hornettechnology.in/",
  },
  {
    name: "ACraft",
    featured: true,
    status: "Live",
    blurb:
      "Turns a single reference photo into stylized 4K artwork. Auto prompt engineering, 30+ styles, powered by Gemini multimodal.",
    gradient: "linear-gradient(135deg, #6d28d9 0%, #a78bfa 100%)",
    image: "/acraft-preview.png",
    url: "https://acraft-eta.vercel.app",
    github: "https://github.com/ankitsingh122/image-creation",
  },
  {
    name: "Turtuleila",
    status: "Live",
    blurb:
      "Explore the World with a global travel architect that builds Turtuleila-optimized routes, finding the most beautiful paths between any two points on Earth.",
    gradient: "linear-gradient(135deg, #0284c7 0%, #22c55e 100%)",
    image: "/turtuleila-preview.png",
    url: "https://travelia-flame.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 py-12">
      <SectionHeading
        title="Projects"
        action={
          <a
            href="https://github.com/ankitsingh122"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            View All <ArrowUpRight className="h-3 w-3" />
          </a>
        }
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-xl border border-border bg-card p-2.5 transition-colors hover:border-foreground/20"
          >
            {/* Label row */}
            <div className="mb-2 px-1 pt-0.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {p.featured ? "Featured" : p.status === "Building" ? "Coming Soon" : "Project"}
              </span>
            </div>

            {/* Thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.name} preview`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: p.gradient }}
                />
              )}
              <div
                className={`absolute inset-0 ${
                  p.image
                    ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    : "opacity-[0.12] mix-blend-overlay"
                }`}
                style={
                  p.image
                    ? undefined
                    : {
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                      }
                }
                aria-hidden
              />
              <span className="absolute bottom-0 left-0 p-3 font-heading text-xl font-bold text-white drop-shadow">
                {p.name}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-2 pt-3">
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-[15px] font-semibold text-foreground">
                  {p.name}
                </h3>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-medium ${
                    p.status === "Live"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                {p.blurb}
              </p>
              <div className="mt-3 flex items-center gap-3 border-t border-border pt-3">
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    View Project <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} source`}
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" /> Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
