'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function TrustSignals() {
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Core Competencies", value: "AI, Web, API" },
    { label: "Available For", value: "Full-Time Roles" }
  ];

  const badges = ["React", "Next.js", "Python", "Node.js", "PostgreSQL", "Docker"];

  return (
    <section className="w-full bg-slate-900 border-y border-slate-800 py-12">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="flex gap-x-8 gap-y-4 flex-wrap">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
              <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-start md:justify-end">
          {badges.map((badge) => (
            <span key={badge} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-medium text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-indigo-400" />
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}