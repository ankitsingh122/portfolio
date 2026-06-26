"use client";

import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiRedux,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiSocketdotio,
  SiOpenai,
  SiGooglegemini,
  SiPostgresql,
  SiRedis,
  SiAmazonwebservices,
  SiDocker,
  SiVercel,
  SiEthereum,
} from "react-icons/si";

/* Shared section heading — large Space Grotesk title with optional action. */
export const SectionHeading = ({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) => (
  <div className="mb-6 flex items-end justify-between">
    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-[34px]">
      {title}
    </h2>
    {action}
  </div>
);

type Tech = { name: string; Icon: IconType };

const stack: Tech[] = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Vite", Icon: SiVite },
  { name: "Redux", Icon: SiRedux },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Python", Icon: SiPython },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "WebSockets", Icon: SiSocketdotio },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Gemini", Icon: SiGooglegemini },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Redis", Icon: SiRedis },
  { name: "ethers.js", Icon: SiEthereum },
  { name: "AWS", Icon: SiAmazonwebservices },
  { name: "Docker", Icon: SiDocker },
  { name: "Vercel", Icon: SiVercel },
];

const Skills = () => {
  return (
    <section id="stack" className="scroll-mt-20 pb-12 pt-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Tech Stack
        </span>
        <span className="h-px flex-1 bg-border" aria-hidden />
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {stack.map((t) => (
          <div
            key={t.name}
            className="group flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 transition-colors hover:bg-accent"
          >
            <t.Icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
            <span className="truncate text-[13px] font-medium text-foreground">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
