import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from './Contact';
import { MoveDown, MoveUp } from 'lucide-react';

// Shared Component for Header and Quote with explicit color control
const OverlayContent = ({ titleClass, subtitleClass, quoteClass }) => (
    <div className="h-full w-full flex flex-col justify-between py-8 pointer-events-none">
        {/* Header */}
        <div className="flex flex-col items-center z-50">
            <h2 className={`text-2xl md:text-4xl font-bold tracking-widest uppercase transition-colors duration-500 font-serif italic ${titleClass}`}>
                Naibedya Bhuyan
            </h2>
            <p className={`text-[10px] md:text-xs tracking-[0.5em] mt-2 font-medium transition-colors duration-500 ${subtitleClass}`}>
                PORTFOLIO
            </p>
        </div>

        {/* Quote */}
        <div className="flex justify-center px-6 z-50">
            <div className={`max-w-3xl text-center transition-colors duration-500 ${quoteClass}`}>
                <p className="text-[10px] md:text-sm italic leading-relaxed font-serif opacity-90 hidden md:block">
                    "If you really want to hear about it, the first thing you’ll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don’t feel like going into it, if you want to know the truth."
                </p>
                <p className="text-[10px] md:text-sm italic leading-relaxed font-serif opacity-90 md:hidden block">
                    "If you really want to hear about it... I don't feel like going into it."
                </p>
                <p className="text-[8px] md:text-[10px] mt-2 uppercase tracking-widest font-bold opacity-70">
                    — The Catcher in the Rye
                </p>
            </div>
        </div>
    </div>
);

const Landing = ({ onEnter }) => {
    const [hoveredSide, setHoveredSide] = useState(null); // 'left' | 'right' | null
    const [matrixText, setMatrixText] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Scroll detection for arrow toggle
    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.5;
            setIsAtBottom(window.scrollY > threshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleScroll = () => {
        if (isAtBottom) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const contactSection = document.getElementById('contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Matrix Effect Logic
    useEffect(() => {
        const chars = '0101010101010101010101010101010101010101010101010101010101010101';
        let interval;
        if (hoveredSide === 'right' || isMobile) {
            interval = setInterval(() => {
                setMatrixText(prev => {
                    if (prev.length > 500) return prev.substring(100);
                    return prev + chars[Math.floor(Math.random() * chars.length)];
                });
            }, 50);
        } else {
            setMatrixText('');
        }
        return () => clearInterval(interval);
    }, [hoveredSide, isMobile]);




    return (
        <div className="w-full bg-neutral-900 relative">
            {/* Navigation Arrow */}
            <motion.div
                className="fixed bottom-6 right-6 z-[60]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    onClick={toggleScroll}
                    aria-label="Scroll navigation"
                    className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-lg hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                    <AnimatePresence mode="wait">
                        {isAtBottom ? (
                            <motion.div
                                key="up"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MoveUp size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="down"
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MoveDown size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </motion.div>
            {/* HEROLANDING SECTION */}
            <div className="relative h-[100dvh] w-full overflow-hidden font-sans flex flex-col md:flex-row">

                {/* ==================== GLOBAL OVERLAYS (DESKTOP) ==================== */}

                {/* Left Overlay: Black Text (Default), Clipped to Left 50% */}
                <div className="absolute inset-0 z-50 pointer-events-none hidden md:block" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                    <OverlayContent
                        titleClass={hoveredSide === 'right' ? 'text-gray-100' : 'text-black'}
                        subtitleClass={hoveredSide === 'right' ? 'text-gray-300' : 'text-gray-600'}
                        quoteClass={hoveredSide === 'right' ? 'text-gray-300' : 'text-gray-800'}
                    />
                </div>

                {/* Right Overlay: White Text, Clipped to Right 50% */}
                <div className="absolute inset-0 z-50 pointer-events-none hidden md:block" style={{ clipPath: 'inset(0 0 0 50%)' }}>
                    <OverlayContent
                        titleClass={hoveredSide === 'left' ? 'text-white/40' : 'text-white'}
                        subtitleClass={hoveredSide === 'left' ? 'text-white/40' : 'text-gray-300'}
                        quoteClass={hoveredSide === 'left' ? 'text-white/40' : 'text-gray-300'}
                    />
                </div>

                {/* ==================== GLOBAL OVERLAYS (MOBILE) ==================== */}
                <div className="absolute inset-0 z-50 pointer-events-none md:hidden flex flex-col justify-between py-6">
                    {/* Header - Always Black (on top light bg) */}
                    <div className="text-center w-full">
                        <h2 className="text-2xl font-bold tracking-widest uppercase text-slate-900 font-serif italic">
                            Naibedya Bhuyan
                        </h2>
                        <p className="text-[10px] tracking-[0.5em] mt-2 font-medium text-slate-600">
                            PORTFOLIO
                        </p>
                    </div>
                    {/* Footer Quote - Always White (on bottom dark bg) */}
                    <div className="text-center w-full px-6">
                        <p className="text-[10px] italic leading-relaxed font-serif opacity-70 text-gray-400">
                            "If you want to know the truth."
                        </p>
                        <p className="text-[8px] mt-1 uppercase tracking-widest font-bold opacity-50 text-gray-500">
                            — J. D. Salinger
                        </p>
                    </div>
                </div>


                {/* ==================== SPLIT PANELS ==================== */}

                {/* LEFT SIDE: Visual & Experience */}
                <motion.div
                    className={`relative w-full h-1/2 md:h-full md:w-1/2 bg-[#F5F5F7] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-in-out
                        ${hoveredSide === 'right' && !isMobile ? 'opacity-40 blur-sm' : 'opacity-100 blur-0'}
                        ${hoveredSide === 'left' ? 'z-20 shadow-2xl' : 'z-10'}
                    `}
                    onMouseEnter={() => setHoveredSide('left')}
                    onMouseLeave={() => setHoveredSide(null)}
                    initial={{ x: isMobile ? 0 : '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {/* Inner Content Wrapper for Zoom Effect */}
                    <div className={`w-full h-full relative flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${!isMobile && hoveredSide === 'left' ? 'scale-105' : !isMobile && hoveredSide === 'right' ? 'scale-95' : 'scale-100'}`}>

                        {/* Background Graphics - ENHANCED */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {/* Gradient Blobs */}
                            <motion.div
                                className="absolute top-[-10%] left-[-10%] w-60 h-60 md:w-96 md:h-96 bg-purple-300/30 rounded-full blur-3xl"
                                animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute bottom-[-10%] right-[-10%] w-60 h-60 md:w-96 md:h-96 bg-blue-300/30 rounded-full blur-3xl"
                                animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Floating Cards (Simplified for mobile) */}
                            <motion.div
                                className="absolute top-[15%] left-[10%] w-24 h-32 md:w-40 md:h-56 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 z-10"
                                animate={{ y: [0, -15, 0], rotate: [-6, -4, -6] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-full h-16 md:h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-2xl mb-2" />
                            </motion.div>
                        </div>

                        <div className="z-10 text-center px-4 md:px-8 relative mt-6 md:mt-0">
                            <h1 className="text-3xl md:text-7xl font-bold text-gray-900 mb-2 md:mb-4 tracking-tight leading-tight font-serif italic">
                                Visual &<br />Experience
                            </h1>
                            <p className="text-gray-500 text-sm md:text-xl font-medium max-w-xs md:max-w-md mx-auto leading-relaxed">
                                I build intuitive Apps, Websites, and UI/UX.
                            </p>

                            <motion.div
                                className="mt-4 md:mt-8 inline-block"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isMobile || hoveredSide === 'left' ? 1 : 0, y: isMobile || hoveredSide === 'left' ? 0 : 20 }}
                            >
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        onEnter('visual');
                                    }}
                                    className="px-5 py-2 md:px-6 md:py-3 bg-black text-white rounded-full text-xs md:text-sm font-semibold tracking-wide shadow-lg hover:bg-gray-800 transition-colors cursor-pointer"
                                >
                                    Enter Creative Studio
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE: Logic & Core */}
                <motion.div
                    className={`relative w-full h-1/2 md:h-full md:w-1/2 bg-[#050505] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-in-out font-mono
                        ${hoveredSide === 'left' && !isMobile ? 'opacity-40 blur-sm' : 'opacity-100 blur-0'}
                        ${hoveredSide === 'right' ? 'z-20 shadow-2xl shadow-green-900/20' : 'z-10'}
                    `}
                    onMouseEnter={() => setHoveredSide('right')}
                    onMouseLeave={() => setHoveredSide(null)}
                    initial={{ x: isMobile ? 0 : '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {/* Inner Content Wrapper */}
                    <div className={`w-full h-full relative flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${!isMobile && hoveredSide === 'right' ? 'scale-105' : !isMobile && hoveredSide === 'left' ? 'scale-95' : 'scale-100'}`}>

                        {/* Grid Background */}
                        <div className="absolute inset-0 opacity-30"
                            style={{ backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                        </div>

                        {/* Tech Elements */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
                            {/* Matrix Text Effect - Always slightly visible on mobile */}
                            <div aria-hidden="true" className="absolute inset-0 overflow-hidden opacity-10 text-[10px] text-green-500 leading-none break-all pointer-events-none font-mono">
                                {matrixText}
                            </div>

                            {/* Rotating HUD Circle */}
                            <motion.div
                                className={`absolute top-10 right-10 md:top-20 md:right-20 w-32 h-32 md:w-48 md:h-48 border border-gray-800 rounded-full border-dashed ${hoveredSide === 'right' || isMobile ? 'border-green-500/50' : ''}`}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        <div className="z-10 text-center px-4 md:px-8 relative mb-6 md:mb-0">
                            <h1 className={`text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4 tracking-tighter leading-tight transition-colors duration-300 ${hoveredSide === 'right' || isMobile ? 'text-green-400' : ''}`}>
                                Logic &<br />Core
                            </h1>
                            <p className="text-gray-400 text-sm md:text-xl max-w-xs md:max-w-md mx-auto leading-relaxed">
                                I engineer IoT Systems, Automation, and EV Architecture.
                            </p>

                            <motion.div
                                className="mt-4 md:mt-8 inline-block"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isMobile || hoveredSide === 'right' ? 1 : 0, y: isMobile || hoveredSide === 'right' ? 0 : 20 }}
                            >
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        onEnter('technical');
                                    }}
                                    className="px-5 py-2 md:px-6 md:py-3 border border-green-500 text-green-400 rounded-sm text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(74,222,128,0.3)] bg-green-900/20 hover:bg-green-900/40 transition-colors cursor-pointer"
                                >
                                    Enter Engineering Lab
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Center Divider - Hidden on Mobile */}
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:flex items-center justify-center">
                <div className="w-[1px] h-32 bg-gray-400/50 absolute top-[-140px]" />
                <div className="w-12 h-12 rounded-full border border-gray-400/50 flex items-center justify-center bg-white/10 backdrop-blur-sm text-xs font-bold text-gray-500">
                    VS
                </div>
                <div className="w-[1px] h-32 bg-gray-400/50 absolute bottom-[-140px]" />
            </div>

            {/* CONTACT SECTION ADDED BELOW THE HERO */}
            <div id="contact-section" className="relative z-40 bg-black">
                <Contact viewMode="visual" />
            </div>
        </div>
    );
};

export default Landing;
