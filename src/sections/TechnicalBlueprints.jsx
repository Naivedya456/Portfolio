import React from 'react';
import { motion } from 'framer-motion';

const Blueprint = ({ title, desc, children }) => (
    <div className="bg-[#003366] p-6 border-2 border-white/20 relative overflow-hidden group h-full flex flex-col">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="relative z-10 flex-1 flex flex-col">
            <h3 className="text-white font-mono text-lg border-b border-white/30 pb-2 mb-4 inline-block">
                {title}
            </h3>
            <div className="flex-1 border border-white/30 bg-[#004080]/50 mb-4 flex items-center justify-center relative min-h-[200px]">
                {children}

                {/* Measurement Lines */}
                <div className="absolute bottom-2 left-4 right-4 h-px bg-white/30 flex justify-between items-center">
                    <div className="h-2 w-px bg-white/30"></div>
                    <span className="text-[10px] text-white/50 bg-[#003366] px-1">SCALE: 1:50</span>
                    <div className="h-2 w-px bg-white/30"></div>
                </div>
            </div>
            <p className="text-white/70 font-mono text-xs leading-relaxed">
                {desc}
            </p>
        </div>

        {/* Corner Markers */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/50"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/50"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/50"></div>
    </div>
);

const TechnicalBlueprints = () => {
    return (
        <section className="py-20 bg-[#050505] px-6 font-mono border-t border-[#333]">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-2 h-8 bg-[#00FF41]"></div>
                    <h2 className="text-3xl font-dot text-white uppercase">Engineering Deep Dive</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Blueprint
                        title="DWG_01: BATTERY_DEFECT_MITIGATION"
                        desc="Root Cause Analysis & DOE implementation reduced thermal runaway risk by 45%. Implemented active cooling logic loop."
                    >
                        <svg width="100%" height="100%" viewBox="0 0 200 150" className="stroke-white fill-none stroke-[1.5]">
                            <rect x="50" y="40" width="100" height="70" />
                            <circle cx="100" cy="75" r="20" strokeDasharray="4 2" />
                            <path d="M 50 40 L 150 110" opacity="0.5" />
                            <path d="M 150 40 L 50 110" opacity="0.5" />
                        </svg>
                    </Blueprint>

                    <Blueprint
                        title="DWG_02: RAIL_SAFETY_PROTOCOL"
                        desc="Safety Integrity Level (SIL-2) compliance audit. Redundant sensor arrays and fail-safe braking logic implementation."
                    >
                        <svg width="100%" height="100%" viewBox="0 0 200 150" className="stroke-white fill-none stroke-[1.5]">
                            <path d="M 20 75 L 180 75" />
                            <path d="M 40 60 L 40 90" />
                            <path d="M 80 60 L 80 90" />
                            <path d="M 120 60 L 120 90" />
                            <path d="M 160 60 L 160 90" />
                            <rect x="60" y="50" width="80" height="50" strokeDasharray="4 2" />
                        </svg>
                    </Blueprint>

                    <Blueprint
                        title="DWG_03: MOTOR_CONTROLLER_LOGIC"
                        desc="Field Oriented Control (FOC) algorithm optimization. Reduced torque ripple by 15% and improved efficiency at low RPMs."
                    >
                        <svg width="100%" height="100%" viewBox="0 0 200 150" className="stroke-white fill-none stroke-[1.5]">
                            <circle cx="100" cy="75" r="40" />
                            <path d="M 100 35 L 100 115" />
                            <path d="M 60 75 L 140 75" />
                            <rect x="85" y="60" width="30" height="30" fill="rgba(255,255,255,0.1)" />
                            <path d="M 100 75 L 130 45" strokeDasharray="4 2" />
                        </svg>
                    </Blueprint>

                    <Blueprint
                        title="DWG_04: CLOUD_DATA_PIPELINE"
                        desc="Serverless architecture for IoT telemetry. AWS Lambda + Kinesis Firehose handling 10k+ messages/sec with <200ms latency."
                    >
                        <svg width="100%" height="100%" viewBox="0 0 200 150" className="stroke-white fill-none stroke-[1.5]">
                            <cloud cx="50" cy="50" r="20" /> {/* Abstract Cloud */}
                            <path d="M 40 75 C 40 60, 60 60, 60 75 C 60 60, 80 60, 80 75" />
                            <path d="M 120 75 C 120 60, 140 60, 140 75 C 140 60, 160 60, 160 75" />
                            <path d="M 80 75 L 120 75" strokeDasharray="4 2" markerEnd="url(#arrow)" />
                            <rect x="85" y="100" width="30" height="20" />
                            <path d="M 100 75 L 100 100" />
                        </svg>
                    </Blueprint>

                    <Blueprint
                        title="DWG_05: THERMAL_MANAGEMENT_SYS"
                        desc="Active liquid cooling loop design for 400V battery pack. PID controller tuning for optimal temperature regulation."
                    >
                        <svg width="100%" height="100%" viewBox="0 0 200 150" className="stroke-white fill-none stroke-[1.5]">
                            <rect x="40" y="40" width="120" height="70" rx="5" />
                            <path d="M 60 40 L 60 110" strokeDasharray="4 2" />
                            <path d="M 80 40 L 80 110" strokeDasharray="4 2" />
                            <path d="M 100 40 L 100 110" strokeDasharray="4 2" />
                            <path d="M 120 40 L 120 110" strokeDasharray="4 2" />
                            <path d="M 140 40 L 140 110" strokeDasharray="4 2" />
                            <path d="M 30 75 L 170 75" strokeWidth="2" stroke="rgba(255,255,255,0.5)" />
                        </svg>
                    </Blueprint>

                    <Blueprint
                        title="DWG_06: PREDICTIVE_MAINTENANCE_AI"
                        desc="LSTM Neural Network model for predicting component failure. Trained on 500GB of historical sensor data."
                    >
                        <svg width="100%" height="100%" viewBox="0 0 200 150" className="stroke-white fill-none stroke-[1.5]">
                            <circle cx="50" cy="75" r="10" />
                            <circle cx="100" cy="50" r="10" />
                            <circle cx="100" cy="100" r="10" />
                            <circle cx="150" cy="75" r="10" />
                            <path d="M 60 75 L 90 50" />
                            <path d="M 60 75 L 90 100" />
                            <path d="M 110 50 L 140 75" />
                            <path d="M 110 100 L 140 75" />
                        </svg>
                    </Blueprint>
                </div>
            </div>
        </section>
    );
};

export default TechnicalBlueprints;
