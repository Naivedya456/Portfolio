import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, Database, Cloud, Zap, Layers, Palette, MousePointer2 } from 'lucide-react';

const Hero = ({ viewMode }) => {
    const content = {
        visual: {
            headline: "I Turn Complex Logic into Beautiful Experiences.",
            subtext: "Full-Stack Developer & UI/UX Designer | Building intuitive apps for the EV Revolution.",
            stat: "User Engagement +40%",
            gradient: "from-blue-400 via-purple-400 to-pink-400", // Aurora-like
            icon: Smartphone
        },
        technical: {
            headline: "Engineering the Logic Behind the Machine.",
            subtext: "Electrical Engineer specializing in IoT & Embedded Systems.",
            stat: "Data Latency Reduced by 30%",
            gradient: "from-secondary to-emerald-600",
            icon: Database
        }
    };

    const current = content[viewMode];

    return (
        <div className={`h-full flex flex-col items-center justify-center relative overflow-hidden px-4 transition-colors duration-1000 ${viewMode === 'visual' ? 'bg-[#FAFAFA]' : 'bg-dark'}`}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        background: viewMode === 'visual'
                            ? 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15), transparent 60%)'
                            : 'radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.15), transparent 50%)'
                    }}
                    className="absolute inset-0 transition-colors duration-1000"
                />
                {/* Aurora Effect for Visual Mode */}
                {viewMode === 'visual' && (
                    <div className="absolute inset-0 opacity-60 blur-3xl">
                        <motion.div
                            className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl"
                            animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl"
                            animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute top-[40%] left-[30%] w-[600px] h-[600px] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl"
                            animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                )}
            </div>

            <div className="z-10 text-center max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-left order-2 lg:order-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={viewMode}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className={`text-sm md:text-base font-medium tracking-widest uppercase mb-4 font-sans ${viewMode === 'visual' ? 'text-gray-500' : 'text-secondary'}`}>
                                {viewMode === 'visual' ? 'Creative Mode' : 'Engineering Mode'}
                            </h2>

                            <h1 className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight font-display ${viewMode === 'visual' ? 'text-gray-900' : 'text-white'}`}>
                                {current.headline}
                            </h1>

                            <p className={`text-lg md:text-xl mb-8 leading-relaxed font-sans ${viewMode === 'visual' ? 'text-gray-600' : 'text-gray-400'}`}>
                                {current.subtext}
                            </p>

                            <div className="flex items-center gap-6">
                                <button
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                    className={`group relative inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-medium overflow-hidden transition-transform hover:scale-105 ${viewMode === 'visual' ? 'bg-black shadow-lg shadow-black/20' : 'bg-secondary'}`}
                                >
                                    <span>View Projects</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="flex flex-col">
                                    <span className={`text-2xl font-bold ${viewMode === 'visual' ? 'text-gray-900' : 'text-secondary'}`}>
                                        {current.stat.split(' ')[current.stat.split(' ').length - 1]}
                                    </span>
                                    <span className={`text-xs uppercase tracking-wider ${viewMode === 'visual' ? 'text-gray-500' : 'text-gray-500'}`}>
                                        {current.stat.replace(current.stat.split(' ')[current.stat.split(' ').length - 1], '')}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Visual Content */}
                <div className="order-1 lg:order-2 flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={viewMode}
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center"
                        >
                            {viewMode === 'visual' ? (
                                // Enhanced Visual Mode with 3D Asset & Graphics
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* Main 3D Asset */}
                                    <motion.img
                                        src="/assets/visual_mode/hero_ev.png"
                                        alt="Glass EV Chassis"
                                        className="w-full h-full object-contain z-10 drop-shadow-2xl"
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    />

                                    {/* Floating Vector Graphics */}
                                    <motion.div
                                        className="absolute top-10 right-10 bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/50 z-20 shadow-lg"
                                        animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    >
                                        <Palette size={24} className="text-gray-800" />
                                    </motion.div>

                                    <motion.div
                                        className="absolute bottom-20 left-0 bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/50 z-20 shadow-lg"
                                        animate={{ x: [0, -10, 0], rotate: [0, -5, 0] }}
                                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    >
                                        <Layers size={24} className="text-gray-800" />
                                    </motion.div>
                                </div>
                            ) : (
                                // Exploded Battery/System Placeholder (Technical Mode)
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gray-900/50 rounded-full border border-secondary/30 animate-spin-slow" />
                                    <div className="absolute inset-10 bg-gray-900/80 rounded-full border border-secondary/50 flex items-center justify-center">
                                        <div className="text-center">
                                            <Cloud size={48} className="text-secondary mx-auto mb-2" />
                                            <div className="w-1 h-8 bg-secondary/50 mx-auto my-2" />
                                            <Zap size={32} className="text-yellow-500 mx-auto" />
                                        </div>
                                    </div>
                                    {/* Data Nodes */}
                                    {[0, 90, 180, 270].map((deg, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-4 h-4 bg-secondary rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                            style={{
                                                top: '50%',
                                                left: '50%',
                                                transform: `rotate(${deg}deg) translate(140px) rotate(-${deg}deg)`
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Hero;
