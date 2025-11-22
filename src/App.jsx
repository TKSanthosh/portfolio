import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import WelcomeLoader from './components/WelcomeLoader';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <ThemeProvider>
            {isLoading ? (
                <WelcomeLoader onLoadingComplete={() => setIsLoading(false)} />
            ) : (
                <Layout>
                    <div id="home">
                        <Hero />
                    </div>
                    <div id="about">
                        <AboutSection />
                    </div>
                    <div id="skills">
                        <SkillsSection />
                    </div>
                    <div id="projects">
                        <ProjectsSection />
                    </div>
                    <div id="experience">
                        <ExperienceSection />
                    </div>
                    <div id="contact">
                        <ContactSection />
                    </div>
                </Layout>
            )}
        </ThemeProvider>
    );
}

export default App;
