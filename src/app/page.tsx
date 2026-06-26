import Header from "@/components/Header";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubSection from "@/components/GitHubSection";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <Dock />
      <div className="mx-auto w-full max-w-2xl px-5 sm:px-6">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <GitHubSection />
        <Quote />
      </div>
      <Footer />
    </>
  );
}
