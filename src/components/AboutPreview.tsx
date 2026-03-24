'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TerminalSquare } from 'lucide-react';

export function AboutPreview() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">
            <TerminalSquare className="w-4 h-4" />
            <span>Behind the Code</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Bridging the gap between logic and user experience.
          </h2>
          <div className="space-y-4 text-slate-400 mb-8">
            <p>
              Hey, I'm Alex. I recently graduated with a degree in Information Technology, 
              where I specialized in architecting systems that are not just theoretically sound, 
              but actually solve real-world problems.
            </p>
            <p>
              I thrive in environments where performance meets design. 
              Whether it's optimizing a database query to shave off milliseconds, or crafting 
              a responsive interface that guides users flawlessly, I build with intention.
            </p>
            <p>
              Currently seeking roles where I can contribute to high-impact projects, 
              collaborate with smart teams, and continue growing as a full-stack engineer.
            </p>
          </div>
          
          <Link href="#about" className="inline-flex items-center gap-2 text-white font-medium hover:text-indigo-400 transition-colors group">
            More about my journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden relative group">
            {/* Placeholder for an Image - Developer styled illustration or nice portrait */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-700 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-800">
               <span className="font-mono text-xs mb-2">{"<ProfileImage />"}</span>
               <TerminalSquare className="w-16 h-16 opacity-30" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}