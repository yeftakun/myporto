'use client';
import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

export function ExperienceTimeline() {
  return (
    <section className="w-full bg-slate-950 border-t border-slate-800 py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">Experience & Education</h2>
        
        <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:pl-0">
          {experience.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="mb-10 pl-8 relative md:flex md:gap-8 md:pl-0 items-start group"
            >
              {/* Timeline marker */}
              <div className="absolute left-[-5px] top-1.5 md:left-1/2 md:-translate-x-[5px] w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-950 group-hover:ring-indigo-500/30 transition-all z-10" />
              
              {/* Left side (Date for desktop) */}
              <div className="hidden md:block w-1/2 text-right pr-12 pt-1">
                <span className="text-sm font-semibold text-indigo-400 tracking-wider uppercase">{item.period}</span>
              </div>

              {/* Right side (Content) */}
              <div className="md:w-1/2 md:pl-12 md:border-l md:border-slate-800 md:relative md:left-1/2 md:-ml-[1px]">
                <div className="md:hidden mb-2">
                  <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">{item.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                <p className="text-slate-300 font-medium mb-3">{item.company}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}