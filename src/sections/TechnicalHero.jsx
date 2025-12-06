import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Cubes from '../animations/Cubes';

const TechnicalHero = () => {
    const [text, setText] = useState('');
    const fullText = "Designing stable EV batteries, embedded telemetry, and real-time IoT systems that behave when it matters.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen bg-[#050505] pt-20 px-6 flex items-center relative overflow-hidden font-mono">
            <div className="absolute inset-0 pointer-events-auto z-0 opacity-100">
                <Cubes
                    gridSize={12}
                    cubeSize={50}
                    faceColor="#050505"
                    borderStyle="1px solid #2a2a2a"
                    rippleColor="#00FF41"
                />
            </div>
            {/* Background Grid & Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-repeat"
                style={{ backgroundImage: 'url(/tech-bg-dot-matrix.png)' }}>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 pointer-events-none">
                {/* Text Column */}
                <div className="pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <h1 className="text-4xl md:text-6xl font-tech text-white mb-4 tracking-tight">
                            &gt; SYSTEM.INIT<br />
                            <span className="text-[#00FF41]">// ENGINEERING_CORE</span>
                        </h1>
                    </motion.div>

                    <div className="h-24 md:h-20">
                        <p className="text-gray-400 text-lg md:text-xl font-mono leading-relaxed">
                            {text}
                            <span className="inline-block w-3 h-5 bg-[#00FF41] ml-1 animate-blink align-middle"></span>
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="mt-8 flex items-center gap-4"
                    >
                        <div className="flex items-center gap-2 text-xs text-[#00FF41]">
                            <div className="w-2 h-2 bg-[#00FF41] rounded-full animate-pulse"></div>
                            SYSTEM STATUS: FIELD-READY
                        </div>
                    </motion.div>
                </div>

                {/* Image Column (Schematic) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="relative h-[400px] border border-[#333] bg-[#0a0a0a] rounded-sm overflow-hidden scanline group pointer-events-auto"
                >
                    <img
                        src="/tech-hero-battery-schematic.png"
                        alt="Battery Schematic"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div className="absolute top-4 right-4 text-[#00FF41] text-xs font-mono border border-[#00FF41] px-2 py-1 bg-black/50 backdrop-blur-sm">
                        FIG. 2.1 // ELECTRO_MECH_STACK
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechnicalHero;
