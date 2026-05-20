"use client";

import { motion } from "motion/react";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Apr 2025 - Present",
    title: "Software Engineer · Hornet Decentratech",
    location: "Kolkata, India · On-site",
    description: [
      "Building Hornet, an on-chain investigation platform for analysts and compliance teams. Own the analyst-facing surface end-to-end: transaction-graph visualisations with auto-layout, geo-IP heatmaps, dashboard composition, and exportable case reports.",
      "Translate heavy data — graph traversals, multi-source queries, dense dashboards — into UIs that stay fast and legible under real investigation load. Work closely with backend and data teams to iterate on schema and product surface as the platform evolves.",
    ],
    tech: ["React", "Vite", "React Flow", "MUI", "Redux Toolkit", "Dagre", "ELK", "Recharts"],
  },
  {
    period: "Apr 2024 - Apr 2025",
    title: "Software Developer · Code Brew Labs",
    location: "Chandigarh, India · On-site",
    description: [
      "Shipped client-facing web and mobile features across multiple product engagements. Worked across the stack — UI, state, APIs, and integrations — owning slices of delivery from spec to release.",
      "Picked up unfamiliar codebases quickly, debugged across legacy and greenfield projects, and contributed patterns the team reused on later builds.",
    ],
    tech: ["React", "Node.js", "TypeScript", "REST APIs"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 bg-transparent relative overflow-hidden max-md:py-12 max-md:px-4">
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.02] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-14 max-md:mb-8"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-teal-600 dark:text-gray-500 uppercase tracking-wider">
            Professional Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 max-md:text-2xl">
            Full-Stack & AI Engineer Experience
          </h2>
        </motion.div>

        <div className="space-y-6 dark:space-y-px max-md:space-y-4">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-black border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-md dark:hover:bg-white/[0.02] transition-all duration-300 max-md:p-4 max-md:rounded-xl"
            >
              <div className="flex flex-col lg:flex-row lg:gap-12 gap-6 max-md:gap-4">
                <div className="flex items-start gap-3 lg:w-56 flex-shrink-0">
                  <Calendar className="w-5 h-5 text-teal-500 dark:text-gray-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="block text-sm font-semibold text-slate-600 dark:text-gray-500 uppercase tracking-wider">
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="block text-xs text-slate-500 dark:text-gray-500">
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-teal-500 dark:text-gray-500 flex-shrink-0" />
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white max-md:text-lg">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="space-y-2 text-slate-600 dark:text-gray-300 leading-relaxed max-md:text-sm">
                    {exp.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 border border-slate-200/80 dark:bg-transparent dark:text-gray-400 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
