import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, Rocket, Wrench, AlertTriangle, Blocks } from 'lucide-react';
import { CallToAction } from '@/components/CallToAction';

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      
      <article className="w-full max-w-4xl mx-auto px-6 py-24 min-h-[80vh]">
        {/* Header */}
        <div className="mb-16">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
            {project.stack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-md font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-16">
          
          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800/50">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl font-bold text-white">The Problem</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {project.problem}
              </p>
            </div>
            
            <div className="bg-indigo-900/10 p-8 rounded-2xl border border-indigo-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl font-bold text-indigo-100">The Solution</h2>
              </div>
              <p className="text-indigo-200/70 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Blocks className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">System Architecture</h2>
            </div>
            <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed">
              <p>{project.architecture}</p>
            </div>
          </div>

          {/* Challenges */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-6 h-6 text-slate-400" />
              <h2 className="text-2xl font-bold text-white">Challenges & Learnings</h2>
            </div>
            <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed border-l-2 border-indigo-500 pl-6">
              <p>{project.challenges}</p>
            </div>
          </div>

        </div>
      </article>

      <CallToAction />
    </main>
  );
}