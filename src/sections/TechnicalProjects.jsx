import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Eye, Radio, Server, Activity, Zap } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'MODULE: SIGNAL_PROCESSING',
        project: 'Erkey Telematics',
        icon: Radio,
        specs: ['Protocol: CAN BUS', 'Latency: <20ms', 'Live: CAN Mapping'],
        img: '/tech-project-can-bus.png'
    },
    {
        id: 2,
        title: 'MODULE: AUTO_REPORT_ENGINE',
        project: 'Dhoot Automation',
        icon: Cpu,
        specs: ['Lang: Python', 'Errors: -40%', 'Sync: Google Sheets'],
        img: '/tech-project-python-script.png'
    },
    {
        id: 3,
        title: 'MODULE: NEURAL_NET_VISION',
        project: 'Sentinel AI',
        icon: Eye,
        specs: ['FPS: 60', 'Model: Object Detection', 'Task: Industrial Monitor'],
        img: '/tech-project-cv-wireframe.png'
    },
    {
        id: 4,
        title: 'MODULE: HARDWARE_LINK',
        project: 'Aura IoT',
        icon: Server,
        specs: ['Pipeline: MQTT', 'Reliability: Watchdog', 'Cloud: AWS IoT'],
        img: '/tech-project-pcb-macro.png'
    },
    {
        id: 5,
        title: 'MODULE: DB_SYNC_CLUSTER',
        project: 'Backend Services',
        icon: Database,
        specs: ['Sync: Distributed', 'Latency: ms-level', 'Conflict: Predictable'],
        img: '/tech-project-server-nodes.png'
    },
    {
        id: 6,
        title: 'MODULE: BATT_LINE_MONITOR',
        project: 'EV Battery Mfg',
        icon: Zap,
        specs: ['Log: Voltage/Temp', 'Alerts: Thresholds', 'Sync: QC Sheets'],
        img: '/tech-project-battery-monitor.png'
    },
    {
        id: 7,
        title: 'MODULE: PACKET_ANALYZER',
        project: 'CAN Diagnostics',
        icon: Activity,
        specs: ['Decode: Raw Frames', 'Flags: SOC/Temp', 'Usage: Test Rides'],
        img: '/tech-project-packet-audit.png'
    },
    {
        id: 8,
        title: 'MODULE: MICROGRID_SIM',
        project: 'Power Systems Sim',
        icon: Database,
        specs: ['Model: MATLAB', 'Flow: Grid<->DG', 'Study: Plant Ops'],
        img: '/tech-project-microgrid-sim.png'
    },
    {
        id: 9,
        title: 'MODULE: SENSOR_HEALTH',
        project: 'IoT Reliability',
        icon: Server,
        specs: ['Check: Wi-Fi/Sensors', 'Action: Auto-Reset', 'Log: Firebase'],
        img: '/tech-project-sensor-health.png'
    },
    {
        id: 10,
        title: 'MODULE: DRIVELOG_VIEWER',
        project: 'Telemetry Vis',
        icon: Eye,
        specs: ['Data: Speed/Drain', 'Analysis: Patterns', 'UI: Multi-plot'],
        img: '/tech-project-drivelog-viewer.png'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
};

// Helper for Bento Grid Layout
const getSpanClass = (index) => {
    // Defines a pattern: Large, Small, Small, Large, Small...
    // Adjust based on total items (10) to create a nice mosaic
    const spans = {
        0: 'md:col-span-2 md:row-span-2', // Hero Module 1
        1: 'md:col-span-1 md:row-span-1',
        2: 'md:col-span-1 md:row-span-1',
        3: 'md:col-span-2 md:row-span-1', // Wide Module 4
        4: 'md:col-span-1 md:row-span-2', // Tall Module 5
        5: 'md:col-span-1 md:row-span-1',
        6: 'md:col-span-1 md:row-span-1',
        7: 'md:col-span-2 md:row-span-1', // Wide Module 8
        8: 'md:col-span-1 md:row-span-1',
        9: 'md:col-span-2 md:row-span-1', // Wide footer Module 10
    };
    return spans[index] || 'md:col-span-1';
};

const TechnicalProjects = () => {
    return (
        <section className="py-20 bg-[#050505] px-6 font-mono border-t border-[#333] relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-2 h-8 bg-[#00FF41]"></div>
                    <h2 className="text-3xl font-dot text-white uppercase">System Architecture</h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.01 }}
                            className={`bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#333] p-0 group overflow-hidden relative hover:border-[#00FF41] hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] transition-all duration-300 flex flex-col ${getSpanClass(index)}`}
                        >
                            {/* Header Bar */}
                            <div className="px-6 py-3 border-b border-[#333] flex justify-between items-center group-hover:border-[#00FF41]/30 transition-colors bg-[#0f0f0f]">
                                <div className="flex items-center gap-2">
                                    <project.icon className="text-[#00FF41] group-hover:animate-pulse" size={16} />
                                    <span className="text-xs text-[#00FF41] font-bold tracking-wider">MOD_0{project.id < 10 ? project.id : project.id}</span>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-[#333] rounded-full group-hover:bg-[#00FF41]"></div>
                                    <div className="w-1.5 h-1.5 bg-[#333] rounded-full"></div>
                                </div>
                            </div>

                            <div className="p-6 relative flex-1 flex flex-col">
                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-white font-bold mb-1 text-lg group-hover:text-[#00FF41] transition-colors font-tech">{project.title.replace('MODULE: ', '')}</h3>
                                        <p className="text-gray-400 text-xs font-mono uppercase tracking-wide">{project.project}</p>
                                    </div>
                                </div>

                                {/* Flexible Image Height based on card size */}
                                <div className="flex-1 w-full bg-[#111] mb-5 overflow-hidden border border-[#222] relative group-hover:border-[#00FF41]/50 transition-colors min-h-[120px]">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className={`w-full h-full object-cover transition-all duration-500 hover:scale-110 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 ${
                                            // Zoom into Gemini-generated images and others to hide watermark/fit better
                                            [2, 3, 4, 6, 7, 8, 9, 10].includes(project.id) ? 'scale-125 hover:scale-150 object-center' : ''
                                            }`}
                                    />
                                    {/* Tech Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.7)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40"></div>
                                </div>

                                {project.specs.map((spec, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                                        <span className="text-[#00FF41] opacity-50 text-[10px]">&gt;</span>
                                        {spec}
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
};

export default TechnicalProjects;
