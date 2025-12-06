import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, MapPin, Mail, Phone, Award, BookOpen, User, Cpu, Terminal } from 'lucide-react';

const About = ({ onClose, viewMode }) => {
    const [activeTab, setActiveTab] = useState('bio'); // 'bio' | 'education' | 'certificates'

    const isEngineering = viewMode === 'technical';

    // Content Data
    const biodata = {
        name: "Naibedya Bhuyan",
        role: "Electrical Engineer | Full-Stack Developer",
        location: "India",
        birthplace: "Odisha",
        dob: "30/07/2003",
        gender: "Male",
        contact: {
            email: "naibedyabhuyan@gmail.com",
            phone: "+91 77358 37675"
        },
        languages: ["English", "Hindi", "Odia"],
        softSkills: ["Leadership", "Creative Thinking", "Communication", "Motivation", "Flexibility"],
        hobbies: ["Reading", "Listening to Music", "Reading Novels"]
    };

    const education = [
        {
            degree: "B.Tech Electrical Engineering",
            institution: "OP Jindal University",
            score: "CGPA 8.35",
            year: "2020 - 2024"
        },
        {
            degree: "High School",
            institution: "DAV Public School",
            score: "93.6%",
            year: "2018 - 2020"
        }
    ];

    const certifications = [
        {
            name: "Algorithms for Battery Management Systems",
            issuer: "Univ. of Colorado",
            icon: <Cpu size={16} />
        },
        {
            name: "Microsoft AI & Machine Learning",
            issuer: "Microsoft",
            icon: <Terminal size={16} />
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
    };

    const tabContentVariants = {
        hidden: { opacity: 0, x: 10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 ${isEngineering ? 'bg-black/90 font-mono' : 'bg-white/60 backdrop-blur-md font-sans'}`}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className={`absolute top-6 right-6 z-50 p-2 rounded-full transition-all duration-300 cursor-pointer ${isEngineering
                    ? 'bg-transparent border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black'
                    : 'bg-black text-white hover:bg-gray-800 shadow-lg'
                    }`}
            >
                <X size={24} />
            </button>

            {/* Main Card Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`w-full max-w-5xl h-[80vh] md:h-[600px] flex flex-col md:flex-row overflow-hidden relative ${isEngineering
                    ? 'bg-black border-2 border-[#00FF41] shadow-[0_0_20px_rgba(0,255,65,0.2)]'
                    : 'bg-white rounded-3xl shadow-2xl border border-white/50'
                    }`}
            >
                {/* Engineering Scanlines Overlay */}
                {isEngineering && (
                    <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
                )}

                {/* LEFT COLUMN: Profile Image */}
                <div className={`w-full md:w-2/5 relative group overflow-hidden ${isEngineering ? 'border-r-2 border-[#00FF41]' : 'bg-gray-50'}`}>
                    {/* Image Placeholder */}
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                        <img
                            src="/profile-placeholder.jpg"
                            alt="Naibedya Bhuyan"
                            className={`w-full h-full object-cover transition-transform duration-500 ${isEngineering ? 'grayscale contrast-125 group-hover:scale-105' : 'group-hover:scale-105'}`}
                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                        />
                        <div className="hidden w-full h-full bg-gray-200 items-center justify-center text-gray-400 flex-col">
                            <User size={48} />
                            <span className="mt-2 text-sm">Profile Image</span>
                        </div>
                    </div>

                    {/* Engineering Glitch Overlay on Hover */}
                    {isEngineering && (
                        <div className="absolute inset-0 bg-[#00FF41] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-100"></div>
                    )}

                    {/* Corner Brackets (Engineering) */}
                    {isEngineering && (
                        <>
                            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#00FF41]"></div>
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#00FF41]"></div>
                        </>
                    )}
                </div>

                {/* RIGHT COLUMN: Biodata & Tabs */}
                <div className={`w-full md:w-3/5 flex flex-col ${isEngineering ? 'text-[#00FF41] p-8' : 'text-gray-800 p-8 md:p-12'}`}>
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${isEngineering ? 'font-dot tracking-widest uppercase' : 'font-serif tracking-tight'}`}>
                            {biodata.name}
                        </h2>
                        <p className={`text-sm md:text-base ${isEngineering ? 'text-[#00FF41]/80' : 'text-gray-500 font-medium'}`}>
                            {biodata.role}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4 text-sm opacity-80">
                            <span className="flex items-center gap-1"><MapPin size={14} /> {biodata.location}</span>
                            <span className="flex items-center gap-1"><User size={14} /> {biodata.gender}, {biodata.dob}</span>
                            <span className="flex items-center gap-1"><Mail size={14} /> {biodata.contact.email}</span>
                        </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className={`flex gap-6 mb-8 border-b ${isEngineering ? 'border-[#00FF41]/30' : 'border-gray-100'}`}>
                        {['bio', 'education', 'certificates'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-3 text-sm font-medium transition-all relative capitalize cursor-pointer ${activeTab === tab
                                    ? (isEngineering ? 'text-[#00FF41]' : 'text-black')
                                    : (isEngineering ? 'text-[#00FF41]/40 hover:text-[#00FF41]/70' : 'text-gray-400 hover:text-gray-600')
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${isEngineering ? 'bg-[#00FF41]' : 'bg-black'}`}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        <AnimatePresence mode="wait">
                            {activeTab === 'bio' && (
                                <motion.div
                                    key="bio"
                                    variants={tabContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="space-y-6"
                                >
                                    <div>
                                        <h3 className={`text-xs uppercase tracking-wider mb-3 ${isEngineering ? 'opacity-70' : 'text-gray-400'}`}>Languages</h3>
                                        <div className="flex gap-2">
                                            {biodata.languages.map(lang => (
                                                <span key={lang} className={`px-3 py-1 text-xs rounded-full ${isEngineering ? 'border border-[#00FF41] text-[#00FF41]' : 'bg-gray-100 text-gray-700'}`}>
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className={`text-xs uppercase tracking-wider mb-3 ${isEngineering ? 'opacity-70' : 'text-gray-400'}`}>Soft Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {biodata.softSkills.map(skill => (
                                                <span key={skill} className={`px-3 py-1 text-xs rounded-full ${isEngineering ? 'border border-[#00FF41] text-[#00FF41]' : 'bg-gray-100 text-gray-700'}`}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className={`text-xs uppercase tracking-wider mb-3 ${isEngineering ? 'opacity-70' : 'text-gray-400'}`}>Hobbies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {biodata.hobbies.map(hobby => (
                                                <span key={hobby} className={`px-3 py-1 text-xs rounded-full ${isEngineering ? 'border border-[#00FF41] text-[#00FF41]' : 'bg-gray-100 text-gray-700'}`}>
                                                    {hobby}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'education' && (
                                <motion.div
                                    key="education"
                                    variants={tabContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="space-y-6"
                                >
                                    {education.map((edu, index) => (
                                        <div key={index} className={`relative pl-6 border-l ${isEngineering ? 'border-[#00FF41]/30' : 'border-gray-200'}`}>
                                            <div className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full ${isEngineering ? 'bg-[#00FF41]' : 'bg-black'}`}></div>
                                            <h4 className="font-bold text-lg leading-none">{edu.degree}</h4>
                                            <p className={`text-sm mt-1 ${isEngineering ? 'opacity-80' : 'text-gray-600'}`}>{edu.institution}</p>
                                            <div className="flex justify-between items-center mt-2 text-xs opacity-60">
                                                <span>{edu.year}</span>
                                                <span className="font-semibold">{edu.score}</span>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === 'certificates' && (
                                <motion.div
                                    key="certificates"
                                    variants={tabContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="space-y-4"
                                >
                                    {certifications.map((cert, index) => (
                                        <div key={index} className={`p-4 rounded-lg flex items-center gap-4 ${isEngineering ? 'border border-[#00FF41]/30 hover:bg-[#00FF41]/10' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}>
                                            <div className={`p-2 rounded-md ${isEngineering ? 'bg-[#00FF41]/20' : 'bg-white shadow-sm'}`}>
                                                {cert.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm">{cert.name}</h4>
                                                <p className={`text-xs ${isEngineering ? 'opacity-70' : 'text-gray-500'}`}>{cert.issuer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Footer / Action */}
                    <div className="mt-8 pt-6 border-t border-gray-100/10">
                        <button
                            onClick={() => window.open('/resume/NaibedyaBhuyanIT.pdf', '_blank')}
                            className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 animate-pulse hover:animate-none cursor-pointer ${isEngineering
                                ? 'bg-[#00FF41] text-black hover:bg-[#00FF41]/90 shadow-[0_0_15px_rgba(0,255,65,0.4)]'
                                : 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl'
                                }`}
                        >
                            <Download size={18} />
                            DOWNLOAD RESUME
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default About;
