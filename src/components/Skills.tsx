'use client';
import { Layout, Server, Wrench, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export function Skills() {
  const skillCategories = [
    {
      title: "Backend & API",
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      skills: ["Node.js", "Python", "FastAPI", "Express", "REST", "GraphQL"]
    },
    {
      title: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Database & Cloud",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Vercel"]
    },
    {
      title: "Tools & Practices",
      icon: <Wrench className="w-5 h-5 text-slate-400" />,
      skills: ["Git", "CI/CD", "Jest", "Agile", "Linux", "UI/UX Principles"]
    }
  ];

  return (
    <section className="w-full bg-slate-900 border-y border-slate-800 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">Technical Arsenal</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 border border-slate-700 bg-slate-800 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map(skill => (
                  <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 block" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}