import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ onEndSession }) => {
    return (
        <footer className="bg-white text-gray-900 py-20 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                    Ready to build something iconic?
                </h2>

                <div className="flex items-center gap-8 mb-12">
                    <a href="https://www.linkedin.com/in/naibedya-bhuyan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-blue-600 transition-colors">
                        <Linkedin size={24} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/Naivedya456" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-gray-600 transition-colors">
                        <Github size={24} />
                        <span>GitHub</span>
                    </a>

                </div>

                <div className="text-gray-400 text-sm flex flex-col items-center gap-4">
                    <p>© 2025 Naibedya Bhuyan. Designed & Engineered in India.</p>
                    <button
                        onClick={onEndSession}
                        className="text-xs hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
                    >
                        Return to Onboarding
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
