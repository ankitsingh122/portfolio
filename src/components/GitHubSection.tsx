"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Skills";

const USERNAME = "ankitsingh122";

const GitHubSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const colorScheme = mounted && resolvedTheme === "dark" ? "dark" : "light";

  return (
    <section id="github" className="scroll-mt-20 py-12">
      <SectionHeading
        title="GitHub"
        action={
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            @{USERNAME} <ArrowUpRight className="h-3 w-3" />
          </a>
        }
      />
      <div className="github-calendar-wrapper flex justify-center overflow-x-auto rounded-xl border border-border bg-card p-5">
        <GitHubCalendar
          username={USERNAME}
          blockSize={11}
          blockMargin={3}
          fontSize={12}
          colorScheme={colorScheme}
          theme={{
            light: ["#ebedf0", "#d4d4d8", "#a1a1aa", "#52525b", "#171717"],
            dark: ["#1c1c1c", "#2e2e2e", "#555555", "#a3a3a3", "#fafafa"],
          }}
        />
      </div>
    </section>
  );
};

export default GitHubSection;
