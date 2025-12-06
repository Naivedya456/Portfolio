import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const TechnicalFooter = ({ onEndSession }) => {
    return (
        <footer className="bg-[#0a0a0a] border-t border-[#333] py-12 px-6 font-mono">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="text-center md:text-left">
                    <div
                        onClick={onEndSession}
                        className="text-[#00FF41] text-xl font-dot mb-2 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        &gt; END_SESSION
                    </div>
                    <p className="text-gray-500 text-xs">SYSTEM SHUTDOWN SEQUENCE INITIATED...</p>
                </div>



                <div className="flex gap-6 text-sm">
                    <a href="https://www.linkedin.com/in/naibedya-bhuyan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF41] flex items-center gap-2 group">
                        <Linkedin size={16} />
                        <span className="group-hover:underline">[LINKEDIN]</span>
                    </a>
                    <a href="https://github.com/Naivedya456" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF41] flex items-center gap-2 group">
                        <Github size={16} />
                        <span className="group-hover:underline">[GITHUB]</span>
                    </a>
                </div>

            </div>

            <div className="mt-12 text-center text-[10px] text-gray-600 border-t border-[#222] pt-8">
                © 2025 NB_SYSTEMS. ALL RIGHTS RESERVED. | BUILD_VER: 2.4.0
            </div>
        </footer>
    );
};

export default TechnicalFooter;
