import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: '95%', label: 'User Satisfaction Score', source: 'Jindal Innovation Centre' },
    { value: '30%', label: 'Reduction in Data Latency', source: 'Erkey Motors' },
    { value: '15 Hrs', label: 'Weekly Time Saved', source: 'Dhoot Transmission' },
];

const ImpactStats = () => {
    return (
        <div className="relative py-32 overflow-hidden bg-black text-white">
            {/* Parallax Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-4">Impact by the Numbers</h2>
                    <p className="text-gray-400">Measurable results from real-world projects.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-7xl md:text-8xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 font-sans">
                                {stat.value}
                            </h3>
                            <p className="text-xl font-bold text-white mb-2">{stat.label}</p>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">Source: {stat.source}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImpactStats;
