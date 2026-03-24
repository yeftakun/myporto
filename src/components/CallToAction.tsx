'use client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import Link from 'next/link';

export function CallToAction() {
  return (
    <section id="contact" className="w-full bg-slate-900 border-t border-slate-800 py-32 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/10 blur-[100px] -z-10" />
      
      <div className="max-w-3xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Let's build something <span className="text-indigo-400">impactful</span> together.
          </h2>
          <p className="text-lg text-slate-400 mb-10 text-balance mx-auto">
            Whether you're a startup looking for a strong foundation, or an established team needing a scalable backend, I'm ready to contribute. 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="mailto:hello@example.com" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-500 transition-colors">
              <Mail className="w-5 h-5" />
              Contact Me Directly
            </Link>
            
            <div className="flex gap-4 w-full sm:w-auto justify-center">
              <Link href="https://linkedin.com" target="_blank" className="p-4 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors border border-slate-700">
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link href="https://github.com" target="_blank" className="p-4 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors border border-slate-700">
                <GithubIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-32 max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm border-t border-slate-800 pt-8">
        <p>© {new Date().getFullYear()} Alex. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Built for Conversion</p>
      </div>
    </section>
  );
}