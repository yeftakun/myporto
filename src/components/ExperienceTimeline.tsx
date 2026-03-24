'use client';
import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

export function ExperienceTimeline() {
  return (
    <section className="w-full bg-slate-950 border-t border-slate-800 py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">Experience & Education</h2>
        <div className="relative">
          {/* Vertical line perfectly aligned with markers */}
          <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-slate-800 rounded" aria-hidden="true" />
          <ul className="space-y-10 relative z-10">
            {experience.map((item, idx) => {
              const isIntern = item.role.toLowerCase().includes('intern');
              const markerColor = isIntern ? 'bg-cyan-400' : 'bg-indigo-500';
              const ringColor = isIntern ? 'ring-cyan-500/30' : 'ring-indigo-500/30';
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="flex items-start gap-6 relative"
                >
                  {/* Timeline marker */}
                  <div className={`mt-1.5 flex-shrink-0 w-4 h-4 rounded-full border-2 border-slate-950 ring-4 ${ringColor} ${markerColor} shadow-lg`} />
                  <div className="flex-1 pb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 flex items-center gap-2 flex-wrap">
                      {item.role}
                      {isIntern && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 font-semibold uppercase tracking-wider ml-1">Internship</span>
                      )}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center md:gap-3 mb-3">
                      <span className="text-slate-300 font-medium">{item.company}</span>
                      <span className="hidden md:block text-slate-700">•</span>
                      <span className="text-sm font-medium text-indigo-400">{item.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}