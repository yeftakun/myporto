import { Hero } from "@/components/Hero";
import { TrustSignals } from "@/components/TrustSignals";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Skills } from "@/components/Skills";
import { AboutPreview } from "@/components/AboutPreview";
import { CallToAction } from "@/components/CallToAction";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Hero />
      <TrustSignals />
      <FeaturedProjects />
      <Skills />
      <AboutPreview />
      <CallToAction />
    </main>
  );
}
