import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Code } from 'lucide-react';

// Import images directly to ensure Vite processes them
import card1 from '../assets/workflow/card1blue.png';
import card2 from '../assets/workflow/card2purple.png';
import card3 from '../assets/workflow/card3green.png';

const steps = [
    {
        id: 1,
        title: 'Discover',
        icon: Search,
        text: 'User Research & Root Cause Analysis.',
        desc: 'Identifying the "Brick Imbalance" issues through deep user interviews and data analysis.',
        bgImage: card1,
        color: 'text-blue-600'
    },
    {
        id: 2,
        title: 'Design',
        icon: PenTool,
        text: 'Wireframing & Prototyping in Figma.',
        desc: 'Iterative usability testing with 150+ participants to refine the user journey.',
        bgImage: card2,
        color: 'text-purple-600'
    },
    {
        id: 3,
        title: 'Develop',
        icon: Code,
        text: 'Clean Architecture & Cloud Integration.',
        desc: 'Building scalable solutions with AWS, Firebase, and modern frontend frameworks.',
        bgImage: card3,
        color: 'text-emerald-600'
    }
];

const Workflow = () => {
    const [activeStep, setActiveStep] = useState(2); // Default to middle step

    return (
        <div className="py-20 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">My Workflow</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        From chaos to clarity.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 h-[600px] md:h-[500px]">
                    {steps.map((step) => (
                        <motion.div
                            key={step.id}
                            onClick={() => setActiveStep(step.id)}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${activeStep === step.id ? 'flex-[3]' : 'flex-[1]'} shadow-sm hover:shadow-md`}
                            layout
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={step.bgImage}
                                    alt={step.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 bg-white/10">
                                <div className="flex items-center justify-between">
                                    <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm ${step.color}`}>
                                        <step.icon size={24} />
                                    </div>
                                    <span className="text-4xl font-bold opacity-20 text-gray-900">0{step.id}</span>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-2 whitespace-nowrap text-gray-900">{step.title}</h3>
                                    <p className={`font-medium text-gray-800 transition-opacity duration-300 ${activeStep === step.id ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                                        {step.text}
                                    </p>

                                    <AnimatePresence>
                                        {activeStep === step.id && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-4 text-sm text-gray-700 leading-relaxed"
                                            >
                                                {step.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workflow;
