"use client";

import { Home, LayoutGrid, Briefcase, FolderGit2, Github } from "lucide-react";

const items = [
  { href: "#home", label: "Top", Icon: Home },
  { href: "#stack", label: "Tech Stack", Icon: LayoutGrid },
  { href: "#experience", label: "Experience", Icon: Briefcase },
  { href: "#projects", label: "Projects", Icon: FolderGit2 },
  { href: "#github", label: "GitHub", Icon: Github },
];

const Dock = () => {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col gap-1 rounded-full border border-border bg-card/80 p-1.5 backdrop-blur-md">
        {items.map(({ href, label, Icon }) => (
          <li key={href} className="group relative">
            <a
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
            <span className="pointer-events-none absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 font-mono text-[10px] text-popover-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Dock;
