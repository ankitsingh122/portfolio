"use client";

import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Skills";

type Role = {
  company: string;
  type: string;
  role: string;
  period: string;
  location: string;
  points: ReactNode[];
  tech: string[];
};

const experiences: Role[] = [
  {
    company: "Hornet Decentratech",
    type: "Full-time",
    role: "Software Engineer",
    period: "Apr 2025 - Present",
    location: "Kolkata, India - On-site",
    points: [
      <>
        Own the analyst-facing surface of an{" "}
        <strong className="font-semibold text-foreground">
          on-chain investigation platform
        </strong>{" "}
        end-to-end — transaction-graph visualisations with auto-layout, geo-IP
        heatmaps, dashboard composition, and exportable case reports.
      </>,
      <>
        Translate heavy data — graph traversals, multi-source queries, dense
        dashboards — into{" "}
        <strong className="font-semibold text-foreground">
          UIs that stay fast and legible
        </strong>{" "}
        under real investigation load.
      </>,
    ],
    tech: ["React", "Vite", "React Flow", "MUI", "Redux Toolkit", "Dagre", "ELK", "Recharts"],
  },
  {
    company: "Code Brew Labs",
    type: "Full-time",
    role: "Software Developer",
    period: "Apr 2024 - Apr 2025",
    location: "Chandigarh, India - On-site",
    points: [
      <>
        Shipped client-facing web and mobile features across multiple product
        engagements — owning slices of delivery{" "}
        <strong className="font-semibold text-foreground">
          from spec to release
        </strong>
        .
      </>,
      <>
        Picked up unfamiliar codebases quickly and contributed{" "}
        <strong className="font-semibold text-foreground">
          patterns the team reused
        </strong>{" "}
        on later builds.
      </>,
    ],
    tech: ["React", "Node.js", "TypeScript", "REST APIs"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20 py-12">
      <SectionHeading title="Experience" />
      <div className="space-y-3">
        {experiences.map((exp) => (
          <article
            key={exp.company}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
          >
            <div className="flex items-start gap-3">
              {/* logo square */}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted font-heading text-base font-bold text-foreground">
                {exp.company.charAt(0)}
              </span>

              <div className="flex flex-1 flex-wrap items-start justify-between gap-x-3 gap-y-1">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-[15px] font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {exp.type}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[13px] text-muted-foreground">{exp.role}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-mono text-[11px] text-foreground/70">{exp.period}</p>
                  <p className="font-mono text-[11px] text-muted-foreground">{exp.location}</p>
                </div>
              </div>
            </div>

            <ul className="mt-3.5 space-y-2.5">
              {exp.points.map((p, i) => (
                <li
                  key={i}
                  className="relative pl-4 text-[13px] leading-relaxed text-muted-foreground"
                >
                  <span
                    className="absolute left-0 top-[0.45rem] h-1 w-1 rounded-full bg-muted-foreground/60"
                    aria-hidden
                  />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <a
          href="https://www.linkedin.com/in/ankitsingh122/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          View All <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
};

export default Experience;
