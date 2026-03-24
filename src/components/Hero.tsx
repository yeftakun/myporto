'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col items-start text-left min-h-[80vh] justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-indigo-500 font-semibold mb-4 text-lg">Hi, I'm Alex</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          IT Graduate & <br className="hidden md:block"/> Backend Developer
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed text-balance">
          I build scalable systems and practical AI-powered applications. 
          Turning complex problems into elegant, reliable engineering solutions.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link href="#projects" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-500 transition-colors group">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#contact" className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 border border-slate-700 transition-colors">
            <Mail className="w-4 h-4" />
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}