"use client";

import { motion } from "motion/react";

const expertise = [
  {
    title: "Blockchain Integration",
    text: "Shipping Web3 features that talk to real chains. Built UNI governance flows on Ethereum using thirdweb and ethers.js — proposal lifecycle, delegate voting, and on-chain state synced into a polished UI. At Hornet, extending the same instincts to multi-source on-chain data: transaction graphs, address clustering, and chain-aware investigation workflows.",
  },
  {
    title: "LLM Integration",
    text: "Wiring multimodal LLMs into product surfaces, not demos. Built ACraft on Gemini's multimodal model — image-to-image generation with auto prompt engineering, so users never see a prompt. Comfortable with multi-provider routing, structured output, vision pipelines, and the failure modes that only show up in production.",
  },
  {
    title: "Data-Heavy Frontends",
    text: "Turning dense data into UIs that stay legible under load. Built investigation dashboards with React Flow and auto-layout (dagre, ELK) for transaction-graph traversal, geo-IP heatmaps over a world map, multi-chart analytics across recharts and ECharts, and exportable PDF/PNG case reports — a workspace built for analysts, not block explorers.",
  },
  {
    title: "Full-Stack Ownership",
    text: "Owning features end-to-end across the stack — UI, state, APIs, and integrations. Day-to-day in React, Next.js, Vite, TypeScript, MUI/Tailwind, Redux Toolkit, and on-chain tooling (thirdweb, ethers). Pick up unfamiliar codebases quickly; ship slices from spec through release.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 bg-transparent max-md:py-12 max-md:px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-14 max-md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-teal-600 dark:text-gray-500 uppercase tracking-wider">
            About Ankit Singh
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-4 max-md:text-2xl max-md:mb-3">
            Full-Stack, AI & Web3: Expertise & Impact
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-md:gap-5 max-md:mb-10">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-white dark:bg-transparent border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md dark:hover:bg-white/[0.02] transition-all duration-300 hover:-translate-y-0.5 max-md:p-4 max-md:rounded-xl"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 max-md:text-lg max-md:mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed max-md:text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="w-full p-6 sm:p-8 rounded-2xl bg-teal-50 border border-teal-100 dark:bg-white/5 dark:border-white/10 max-md:p-4 max-md:rounded-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-lg max-md:text-base">
            I&apos;m a full-stack engineer focused on the frontend layer of products that lean heavily on AI and Web3. At Hornet, I build the analyst-facing surface of an on-chain investigation platform — the kind of UI where transaction graphs, multi-source data, and case workflows have to stay fast and legible under real load.
            <br /><br />
            On the side I ship products that exercise the same muscles: Quorum (UNI governance with smart-contract-backed state) and ACraft (Gemini-powered image generation), among smaller experiments. I&apos;m comfortable owning a feature from system design through deploy — TypeScript, React, Next.js, Web3 tooling, and LLM integration are the everyday stack.
            <br /><br />
            Open to roles where the frontend is genuinely hard — heavy data, real-time graphs, AI surfaces, or chain-aware UIs — and where engineers are trusted to ship the whole slice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
