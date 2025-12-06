import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Settings } from 'lucide-react';

const Navbar = ({ setViewMode, onOpenAbout }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', action: onOpenAbout },
        { name: 'Work', href: '#work' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tighter font-serif italic">
                    NB.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        link.action ? (
                            <button
                                key={link.name}
                                onClick={link.action}
                                className="text-sm font-medium text-gray-600 hover:text-black transition-colors cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                            >
                                {link.name}
                            </a>
                        )
                    ))}

                    {/* Mode Switch Button */}
                    <button
                        onClick={() => setViewMode('technical')}
                        className="flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors shadow-lg"
                    >
                        <span>Engineering Mode</span>
                        <Settings size={14} className="animate-spin-slow" />
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {links.map((link) => (
                                link.action ? (
                                    <button
                                        key={link.name}
                                        onClick={() => { link.action(); setIsOpen(false); }}
                                        className="text-lg font-medium text-gray-800 text-left"
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-800"
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}
                            {/* Mobile Mode Switch */}
                            <button
                                onClick={() => { setViewMode('technical'); setIsOpen(false); }}
                                className="flex items-center gap-2 text-lg font-medium text-gray-800 mt-4 pt-4 border-t border-gray-100"
                            >
                                <span>Switch to Engineering Mode</span>
                                <Settings size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
