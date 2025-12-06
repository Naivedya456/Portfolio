import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    { name: 'Flutter', slug: 'flutter', color: '#02569B' },
    { name: 'React', slug: 'react', color: '#61DAFB' },
    { name: 'Figma', slug: 'figma', color: '#F24E1E' },
    { name: 'Python', slug: 'python', color: '#3776AB' },
    {
        name: 'AWS',
        slug: 'amazonaws',
        color: '#FF9900',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    { name: 'Firebase', slug: 'firebase', color: '#FFCA28' },
    { name: 'TensorFlow', slug: 'tensorflow', color: '#FF6F00' },
    { name: 'OpenAI', slug: 'openai', color: '#412991' },
    { name: 'Arduino', slug: 'arduino', color: '#00979D' },
    {
        name: 'VS Code',
        slug: 'visualstudiocode',
        color: '#007ACC',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg'
    },
];

const CreativeStack = () => {
    return (
        <div className="w-full py-12 bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center md:text-left">The Creative Stack</h3>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* First Marquee Loop */}
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 group/item cursor-default transition-all duration-300"
                        >
                            <div className="w-12 h-12 relative flex items-center justify-center">
                                <img
                                    src={logo.url || `https://cdn.simpleicons.org/${logo.slug}`}
                                    alt={logo.name}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover/item:scale-110"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://placehold.co/40x40?text=${logo.name[0]}`;
                                    }}
                                />
                            </div>
                            <span
                                className="text-2xl font-black text-black group-hover/item:text-gray-700 transition-colors duration-300"
                            >
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Second Marquee Loop (Absolute for seamless effect) */}
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center ml-16">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 group/item cursor-default transition-all duration-300"
                        >
                            <div className="w-12 h-12 relative flex items-center justify-center">
                                <img
                                    src={logo.url || `https://cdn.simpleicons.org/${logo.slug}`}
                                    alt={logo.name}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover/item:scale-110"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://placehold.co/40x40?text=${logo.name[0]}`;
                                    }}
                                />
                            </div>
                            <span
                                className="text-2xl font-black text-black group-hover/item:text-gray-700 transition-colors duration-300"
                            >
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeStack;
