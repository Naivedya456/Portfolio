import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import CreativeStack from '../components/CreativeStack';
import Workflow from '../components/Workflow';
import ImpactStats from '../components/ImpactStats';
import Footer from '../components/Footer';
import About from '../sections/About';
import EnhancedDashboardSections from '../sections/EnhancedDashboardSections';

// Technical Components
import TechnicalNavbar from '../components/TechnicalNavbar';
import TechnicalHero from '../sections/TechnicalHero';
import TechnicalProjects from '../sections/TechnicalProjects';
import TechnicalTerminal from '../sections/TechnicalTerminal';
import TechnicalBlueprints from '../sections/TechnicalBlueprints';
import TechnicalFooter from '../components/TechnicalFooter';

import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = ({ initialMode, onBackToLanding }) => {
    const [viewMode, setViewMode] = useState(initialMode || 'visual'); // 'visual' or 'technical'
    const [showAbout, setShowAbout] = useState(false);

    const toggleMode = (mode) => {
        setViewMode(mode);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Simple view counting using a free public API
        // Checks if we've already counted this session to avoid duplicates on refresh if possible, 
        // though this simple implementation just counts on mount.
        const trackView = async () => {
            try {
                // Tracking view count
                await fetch('https://api.counterapi.dev/v1/naivedya-portfolio/visits/up');
            } catch (err) {
                console.error('Failed to track visit:', err);
            }
        };
        trackView();
    }, []);

    return (
        <div className={`min-h-screen transition-colors duration-500 ${viewMode === 'visual' ? 'bg-[#FAFAFA] text-slate-900' : 'bg-[#050505] text-white'}`}>

            <AnimatePresence>
                {showAbout && <About onClose={() => setShowAbout(false)} viewMode={viewMode} />}
            </AnimatePresence>

            {viewMode === 'visual' ? (
                <>
                    <Navbar viewMode={viewMode} setViewMode={setViewMode} onOpenAbout={() => setShowAbout(true)} />
                    <div id="home"><Hero viewMode={viewMode} /></div>

                    {/* New Enhanced Sections */}
                    <EnhancedDashboardSections className="py-20 px-4 max-w-7xl mx-auto" />

                    <CreativeStack />
                    <div id="work"><Projects viewMode={viewMode} /></div>
                    <Workflow />
                    <ImpactStats />
                    <div id="skills"><Skills viewMode={viewMode} /></div>
                    <Footer onEndSession={onBackToLanding} />


                </>
            ) : (
                <>
                    <TechnicalNavbar onSwitchMode={toggleMode} onOpenAbout={() => setShowAbout(true)} />
                    <div id="home"><TechnicalHero /></div>
                    <div id="work"><TechnicalProjects /></div>
                    <div id="skills"><TechnicalTerminal /></div>
                    <TechnicalBlueprints />
                    <TechnicalFooter onEndSession={onBackToLanding} />
                </>
            )}

        </div>
    );
};

export default Dashboard;
