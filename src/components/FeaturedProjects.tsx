'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';
import Link from 'next/link';
import { projects } from '@/lib/data';

export function FeaturedProjects() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Featured Projects</h2>
        <p className="text-lg text-slate-400 max-w-2xl text-balance">
          Select case studies showcasing my ability to architect robust backends, integrate AI, and build seamless user interfaces.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/50 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-slate-400 mb-6 flex-grow">{project.shortDescription}</p>
            
            <div className="mb-6 space-y-3">
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Impact</p>
              <p className="text-sm font-medium text-slate-200">{project.impact}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.slice(0, 3).map(tech => (
                <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md">
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="px-2 py-1 bg-slate-800 text-slate-500 text-xs rounded-md">
                  +{project.stack.length - 3} more
                </span>
              )}
            </div>

            <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-slate-800">
              <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-white hover:text-indigo-400 flex items-center gap-2 transition-colors group">
                Read Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}