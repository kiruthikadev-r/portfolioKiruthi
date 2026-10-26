import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectGallery from "../components/ProjectGallery";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Philosophy from "../components/Philosophy";
import Achievements from "../components/Achievements";
import GitHubSection from "../components/GitHubSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectGallery />
        <ExperienceTimeline />
        <Philosophy />
        <Achievements />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
