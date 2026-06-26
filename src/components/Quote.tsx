const Quote = () => {
  return (
    <section className="py-10">
      <figure className="mx-auto max-w-md text-center">
        <blockquote className="font-heading text-[15px] italic leading-relaxed text-muted-foreground sm:text-base">
          &ldquo;I&apos;ve read through a thousand codebases — not to copy them,
          but to understand them, and build things sturdier than what came
          before.&rdquo;
        </blockquote>
        <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          — Note to self
        </figcaption>
      </figure>
    </section>
  );
};

export default Quote;
