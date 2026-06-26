"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Clock = () => {
  const [time, setTime] = useState("00.00.00");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const p = (n: number) => String(n).padStart(2, "0");
      setTime(`${p(d.getHours())}.${p(d.getMinutes())}.${p(d.getSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-clock text-[15px] font-black tabular-nums text-clock sm:text-base">
      {time}
    </span>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex h-14 max-w-2xl items-center justify-between px-5 sm:px-6"
        aria-label="Main navigation"
      >
        <Clock />

        <a
          href="#home"
          className="absolute left-1/2 -translate-x-1/2 font-heading text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70 max-sm:hidden"
        >
          Ankit Singh
        </a>

        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
