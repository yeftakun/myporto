'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Database, Layout, Server, Cpu } from 'lucide-react';
import { GithubIcon } from './icons';
import Link from 'next/link';

export function FeaturedProjects() {
  const projects = [
    {
      title: "AI Document Analyzer",
      description: "Automated OCR and data extraction system that reduces manual processing time by 80%. Built for scale with microservices.",
      stack: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI"],
      impact: "Processed 10,000+ documents with 99% accuracy.",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Scalable E-Commerce API",
      description: "High-performance backend API supporting real-time inventory management, caching, and a secure payment gateway integration.",
      stack: ["Node.js", "Express", "Redis", "MongoDB", "Stripe API"],
      impact: "Handles 5,000+ concurrent requests securely.",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "A streaming data visualization platform tracking user metrics, featuring websockets and optimized query aggregation.",
      stack: ["Next.js", "Tailwind", "Go", "WebSockets"],
      impact: "Sub-200ms latency on live data rendering.",
      demoUrl: "#",
      repoUrl: "#"
    }
  ];

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
            <p className="text-sm text-slate-400 mb-6 flex-grow">{project.description}</p>
            
            <div className="mb-6 space-y-3">
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Impact</p>
              <p className="text-sm font-medium text-slate-200">{project.impact}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map(tech => (
                <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto pt-4 border-t border-slate-800">
              <a href={project.demoUrl} className="text-sm font-medium text-white hover:text-indigo-400 flex items-center gap-2 transition-colors">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
              <a href={project.repoUrl} className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                <GithubIcon className="w-4 h-4" /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}