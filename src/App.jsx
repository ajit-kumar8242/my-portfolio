import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Value from "./components/Value";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary-50 dark:bg-dark-900 transition-colors duration-200">
        <Navbar />
        <div>
          <HeroSection />
          <About />
          <Project />
          <Education />
          <Value />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
