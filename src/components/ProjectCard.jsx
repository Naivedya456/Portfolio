import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import TechnicalDiagram from './TechnicalDiagram';

const ProjectCard = ({ project, initialMode }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Sync flip state with global mode, but allow manual override
    useEffect(() => {
        setIsFlipped(initialMode === 'technical');
    }, [initialMode]);

    const handleFlip = (e) => {
        e.stopPropagation();
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    };

    return (
        <div
            className="w-full h-[500px] perspective-1000"
        >
            <motion.div
                className="relative w-full h-full preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, animationDirection: 'normal' }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                {/* Front Face (Visual Mode) */}
                <div className="absolute inset-0 backface-hidden bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 group flex flex-col">
                    <div className="h-3/5 bg-gray-900 flex items-center justify-center overflow-hidden relative">
                        {/* Project Mockup Image */}
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        ) : (
                            <>
                                {/* Fallback Gradient */}
                                <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-80 group-hover:scale-110 transition-transform duration-500`} />
                                <div className="absolute text-6xl font-bold text-white/10 select-none">
                                    {project.id}
                                </div>
                            </>
                        )}
                        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10">
                            {project.visual.caption}
                        </div>
                    </div>
                    <div className="h-2/5 p-6 flex flex-col justify-between bg-gray-800">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm line-clamp-2">{project.visual.shortDesc}</p>
                        </div>
                        <button
                            onClick={handleFlip}
                            className="mt-4 flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                        >
                            {project.visual.buttonText}
                        </button>
                    </div>
                </div>

                {/* Back Face (Technical Mode) */}
                <div
                    className="absolute inset-0 backface-hidden bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-700 rotate-y-180 flex flex-col"
                >
                    {/* Technical Diagram */}
                    <div className="h-3/5 bg-black/50 border-b border-gray-700 flex items-center justify-center overflow-hidden">
                        <TechnicalDiagram projectId={project.id} />
                    </div>

                    {/* Technical Details */}
                    <div className="h-2/5 p-6 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold text-white">{project.technical.shortDesc}</h3>
                            <div className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded border border-secondary/20">
                                {project.technical.caption}
                            </div>
                        </div>

                        <div className="flex-grow mb-3">
                            <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">{project.technical.fullDesc}</p>
                        </div>

                        <div className="mb-3">
                            <div className="flex flex-wrap gap-1">
                                {project.technical.tech.slice(0, 4).map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-gray-800 text-secondary text-[10px] rounded-full border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleFlip}
                            className="w-full py-2 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600 text-sm"
                        >
                            <RefreshCw size={14} />
                            {project.technical.buttonText}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
