import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Cpu, Globe, Layers, Zap, Cloud } from 'lucide-react';

const Skills = ({ viewMode }) => {
    // Visual Mode: Generative Services
    if (viewMode === 'visual') {
        const services = [
            {
                title: "UI/UX Design",
                icon: PenTool,
                desc: "Crafting intuitive, pixel-perfect interfaces that delight users.",
                color: "bg-purple-100 text-purple-600"
            },
            {
                title: "Cross-Platform Dev",
                icon: Globe,
                desc: "Building seamless apps for iOS, Android, and Web with Flutter & React.",
                color: "bg-blue-100 text-blue-600"
            },
            {
                title: "Creative Automation",
                icon: Zap,
                desc: "Automating workflows and generating assets with code.",
                color: "bg-pink-100 text-pink-600"
            }
        ];

        return (
            <div className="py-20 bg-[#FAFAFA]" id="skills">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Generative Services</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Bridging the gap between design and engineering.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                                whileHover={{ y: -10 }}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Technical Mode: Skills Grid (Existing)
    const skillCategories = [
        {
            title: "Frontend & UI",
            icon: PenTool,
            skills: ["React", "Tailwind CSS", "Framer Motion", "Flutter", "Next.js"]
        },
        {
            title: "Backend & Cloud",
            icon: Cloud, // Assuming Cloud is imported or available
            skills: ["Node.js", "AWS IoT", "Firebase", "PostgreSQL", "Redis"]
        },
        {
            title: "Embedded & IoT",
            icon: Cpu,
            skills: ["C++", "ESP32", "MQTT", "RTOS", "Modbus"]
        }
    ];

    return (
        <div className="py-20 bg-dark" id="skills">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-secondary font-medium tracking-widest uppercase mb-2">Technical Arsenal</h2>
                    <h3 className="text-4xl font-bold text-white">Core Competencies</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                            <div className="flex items-center gap-3 mb-6">
                                <category.icon className="text-secondary" size={24} />
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
