import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WordleGame from './components/WordleGame';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [loading, setLoading] = useState(true);

  // Track when the intro animation is done
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Listen for intro animation completion
  useEffect(() => {
    if (introDone) {
      setLoading(false);
      document.body.style.overflow = '';
    }
  }, [introDone]);

  if (loading) {
    return <IntroAnimation onDone={() => setIntroDone(true)} />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-white transition-colors duration-300 relative">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <main className="relative z-10">
          <Hero />
          <About />
          
          <Projects />
          <Skills />
        </main>

        <Footer />
        <WordleGame />
      </div>
    </ThemeProvider>
  );
}

export default App;