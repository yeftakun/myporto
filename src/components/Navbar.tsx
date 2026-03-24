'use client';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="w-full max-w-5xl mx-auto px-6 py-4 flex items-center justify-between sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">
      <Link href="/" className="text-xl font-bold tracking-tighter shrink-0">
        <span className="text-indigo-500">Dev</span>Portfolio
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="#projects" className="text-sm font-medium hover:text-indigo-400 transition-colors">Projects</Link>
        <Link href="#about" className="text-sm font-medium hover:text-indigo-400 transition-colors">About</Link>
        <Link href="#contact" className="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors text-white">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}