'use client';
import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

export function ExperienceTimeline() {
  return (
    <section className="w-full bg-slate-950 border-t border-slate-800 py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">Experience & Education</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 w-1 h-full bg-slate-800 rounded" aria-hidden="true" />
          <ul className="space-y-12 relative z-10">
            {experience.map((item, idx) => {
              const isIntern = item.role.toLowerCase().includes('intern');
              const markerColor = isIntern ? 'bg-cyan-400' : 'bg-indigo-500';
              const ringColor = isIntern ? 'ring-cyan-400/30' : 'ring-indigo-500/30';
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
                  <div className={`mt-2 flex-shrink-0 w-4 h-4 rounded-full border-4 border-slate-950 ${markerColor} ${ringColor} shadow-lg`} />
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 flex items-center gap-2">
                      {item.role}
                      {isIntern && (
                        <span className="text-xs px-2 py-0.5 rounded bg-cyan-900 text-cyan-300 font-semibold ml-2">Internship</span>
                      )}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center md:gap-3 mb-1">
                      <span className="text-slate-300 font-medium">{item.company}</span>
                      <span className="text-xs text-slate-400 mt-1 md:mt-0">{item.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mt-2">{item.description}</p>
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