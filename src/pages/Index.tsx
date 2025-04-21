
import { CustomCursor } from "@/components/CustomCursor";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
      {/* Custom animated cursor */}
      <CustomCursor />
      
      {/* Interactive background particles */}
      <ParticleCanvas count={75} />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero section */}
      <Hero />
      
      {/* Projects section */}
      <Projects />
      
      {/* Skills section */}
      <Skills />
      
      {/* Contact section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
