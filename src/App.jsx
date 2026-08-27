import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import TacticalBackground from './components/TacticalBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Training from './components/Training';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#080A0B] text-[#F5F5F5] font-body relative selection:bg-amber-500 selection:text-black">
      
      {/* Tactical Loading Boot Sequence */}
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Ambient Tactical Background Mesh */}
          <TacticalBackground />

          {/* Main Portfolio Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-1">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Training />
              <Services />
              <Contact />
            </main>

            <Footer />
          </div>
        </>
      )}

    </div>
  );
}
