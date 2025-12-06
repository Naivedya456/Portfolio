import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Settings } from 'lucide-react';

const TechnicalNavbar = ({ onSwitchMode, onOpenAbout }) => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#333] h-16 flex items-center justify-between px-6 font-mono"
        >
            <div className="flex items-center gap-2 text-[#00FF41]">
                <Terminal size={18} />
                <span className="text-sm tracking-widest font-tech">NB_ENGINEERING.OS // v2.4</span>
            </div>

            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-6 mr-4">
                    <a href="#home" className="text-xs text-gray-400 hover:text-[#00FF41] transition-colors uppercase tracking-wider">[ HOME ]</a>
                    <button onClick={onOpenAbout} className="text-xs text-gray-400 hover:text-[#00FF41] transition-colors uppercase tracking-wider cursor-pointer">[ ABOUT ]</button>
                    <a href="#work" className="text-xs text-gray-400 hover:text-[#00FF41] transition-colors uppercase tracking-wider">[ WORK ]</a>
                    <a href="#skills" className="text-xs text-gray-400 hover:text-[#00FF41] transition-colors uppercase tracking-wider">[ SKILLS ]</a>
                </div>

                <div className="hidden md:flex items-center gap-4 text-xs text-gray-500 border-l border-[#333] pl-6">
                    <span className="flex items-center gap-1">
                        <Cpu size={12} /> PWR BUS: 96%
                    </span>
                    <span className="flex items-center gap-1">
                        <Settings size={12} /> I/O: ACTIVE
                    </span>
                    <span className="flex items-center gap-1">
                        <Terminal size={12} /> MODE: ENGINEERING
                    </span>
                </div>



                <button
                    onClick={() => onSwitchMode('visual')}
                    className="px-4 py-2 border border-[#333] bg-[#0a0a0a] text-gray-400 text-xs hover:text-[#00FF41] hover:border-[#00FF41] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                    <span>&lt; Switch_Mode: VISUAL &gt;</span>
                </button>
            </div>
        </motion.nav>
    );
};

export default TechnicalNavbar;
