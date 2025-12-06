import React from 'react';
import AutoScrollCarousel from './AutoScrollCarousel';
import { motion } from 'framer-motion';

const projects = [
    {
        id: '01',
        title: 'Erkey Live Track',
        tags: ['Flutter', 'AWS IoT', 'Figma'],
        image: '/assets/visual_mode/hero_ev.png', // Placeholder for failed generation
        stat: 'Reduced Latency by 30%',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: '02',
        title: 'FlowAuto Dashboard',
        tags: ['Python', 'Google APIs', 'React'],
        image: '/assets/visual_mode/flowauto.png',
        stat: '15 Hours/Week Saved',
        color: 'from-emerald-500 to-teal-500'
    },
    {
        id: '03',
        title: 'Sentinel Vision AI',
        tags: ['TensorFlow', 'OpenCV', 'Python'],
        image: '/assets/visual_mode/sentinel.png',
        context: 'Real-time Object Detection UI',
        color: 'from-purple-500 to-indigo-500'
    },
    {
        id: '04',
        title: 'Aura Smart Home',
        tags: ['IoT Core', 'Arduino', 'Flutter'],
        image: '/assets/visual_mode/aura.png',
        context: 'Cloud-connected Hardware Interface',
        color: 'from-orange-500 to-amber-500'
    },
    {
        id: '05',
        title: 'Sync Chat',
        tags: ['Firebase', 'React Native'],
        image: '/assets/visual_mode/sync.png',
        context: 'Zero-latency messaging architecture',
        color: 'from-pink-500 to-rose-500'
    },
    {
        id: '06',
        title: 'CraveCoin Ecosystem',
        tags: ['Flutter', 'React', 'Firebase'],
        image: '/assets/visual_mode/cravecoin.png',
        stat: 'Real-time Point Sync < 100ms',
        color: 'from-yellow-500 to-orange-500'
    },
    {
        id: '07',
        title: 'CareerSwipe',
        tags: ['Flutter', 'Cloud Functions'],
        image: '/assets/visual_mode/careerswipe.png',
        context: 'Gamified Recruitment Platform',
        color: 'from-red-500 to-pink-500'
    }
];

const WorkGallery = () => {
    return (
        <div className="w-full bg-[#FAFAFA] py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <h2 className="text-gray-900 text-4xl font-bold tracking-tight">Selected Work</h2>
                <p className="text-gray-500 mt-2">Drag or hover to pause</p>
            </div>

            <AutoScrollCarousel
                items={projects}
                speed={50} // Pixels per second (approx)
                renderItem={(project) => (
                    <motion.div
                        className="w-[85vw] md:w-[600px] h-[400px] relative rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing group perspective-1000 shadow-xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-gray-200">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>

                        {/* Glass Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <div className="flex items-center gap-2 mb-3">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-300 text-sm font-medium">
                                {project.stat || project.context}
                            </p>
                        </div>
                    </motion.div>
                )}
            />
        </div>
    );
};

export default WorkGallery;
