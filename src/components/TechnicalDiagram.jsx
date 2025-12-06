import React from 'react';
import { ArrowRight, Database, Cloud, Cpu, Zap, Server, Code, GitBranch } from 'lucide-react';

const TechnicalDiagram = ({ projectId }) => {
    const diagrams = {
        '01': ( // Erkey Motors
            <div className="w-full h-full flex items-center justify-center bg-black">
                <img
                    src="/assets/technical_mode/battery_structure.png"
                    alt="Battery Pack Structure"
                    className="w-full h-full object-contain"
                />
            </div>
        ),

        '02': ( // Dhoot Transmission
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-xs">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-emerald-900/30 border border-emerald-500/30 rounded p-2 text-center">
                        <Code size={16} className="mx-auto mb-1 text-emerald-400" />
                        <div className="text-emerald-300 font-mono text-[10px]">CSV Files</div>
                    </div>
                    <ArrowRight size={16} className="text-emerald-500" />
                    <div className="bg-emerald-900/30 border border-emerald-500/30 rounded p-2 text-center">
                        <Server size={16} className="mx-auto mb-1 text-emerald-400" />
                        <div className="text-emerald-300 font-mono text-[10px]">Python Script</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 w-full max-w-xs">
                    <div className="bg-gray-800 border border-gray-600 rounded p-2 text-center text-gray-400 text-[9px]">Data Parser</div>
                    <div className="bg-gray-800 border border-gray-600 rounded p-2 text-center text-gray-400 text-[9px]">API Handler</div>
                    <div className="bg-gray-800 border border-gray-600 rounded p-2 text-center text-gray-400 text-[9px]">Error Logger</div>
                    <div className="bg-gray-800 border border-gray-600 rounded p-2 text-center text-gray-400 text-[9px]">Cron Job</div>
                </div>

                <ArrowRight size={16} className="text-emerald-500 rotate-90 mb-2" />

                <div className="bg-emerald-900/30 border border-emerald-500/30 rounded p-3 text-center">
                    <Database size={16} className="mx-auto mb-1 text-emerald-400" />
                    <div className="text-emerald-300 font-mono text-[10px]">Google Sheets</div>
                    <div className="text-gray-400 text-[9px]">Master Database</div>
                </div>
            </div>
        ),

        '03': ( // Smart Grid
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-xs">
                <div className="bg-orange-900/30 border border-orange-500/30 rounded p-2 text-center mb-3">
                    <Zap size={16} className="mx-auto mb-1 text-orange-400" />
                    <div className="text-orange-300 font-mono text-[10px]">Smart Meter</div>
                    <div className="text-gray-400 text-[9px]">Modbus RS485</div>
                </div>

                <ArrowRight size={16} className="text-orange-500 rotate-90 mb-2" />

                <div className="grid grid-cols-2 gap-2 mb-3 w-full max-w-xs">
                    <div className="bg-gray-800 border border-gray-600 rounded p-2 text-center text-gray-400 text-[9px]">1kHz Sampling</div>
                    <div className="bg-gray-800 border border-gray-600 rounded p-2 text-center text-gray-400 text-[9px]">Harmonic Analysis</div>
                </div>

                <div className="bg-orange-900/30 border border-orange-500/30 rounded p-2 text-center mb-2">
                    <Server size={16} className="mx-auto mb-1 text-orange-400" />
                    <div className="text-orange-300 font-mono text-[10px]">WebSocket Server</div>
                </div>

                <ArrowRight size={16} className="text-orange-500 rotate-90 mb-2" />

                <div className="bg-orange-900/30 border border-orange-500/30 rounded p-2 text-center">
                    <div className="text-orange-300 font-mono text-[10px]">D3.js Dashboard</div>
                    <div className="text-gray-400 text-[9px]">Real-time Visualization</div>
                </div>
            </div>
        ),

        '04': ( // Drone Controller
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-xs">
                <div className="bg-purple-900/30 border border-purple-500/30 rounded p-2 text-center mb-3">
                    <Cpu size={16} className="mx-auto mb-1 text-purple-400" />
                    <div className="text-purple-300 font-mono text-[10px]">FreeRTOS</div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3 w-full max-w-sm">
                    <div className="bg-gray-800 border border-gray-600 rounded p-1 text-center text-gray-400 text-[9px]">Gyro</div>
                    <div className="bg-gray-800 border border-gray-600 rounded p-1 text-center text-gray-400 text-[9px]">Accel</div>
                    <div className="bg-gray-800 border border-gray-600 rounded p-1 text-center text-gray-400 text-[9px]">Baro</div>
                </div>

                <ArrowRight size={16} className="text-purple-500 rotate-90 mb-2" />

                <div className="bg-purple-900/30 border border-purple-500/30 rounded p-3 text-center mb-2 w-full max-w-xs">
                    <div className="text-purple-300 font-mono text-[10px] mb-2">PID Controller</div>
                    <div className="flex justify-around text-[9px] text-gray-400">
                        <span>Kp: 1.2</span>
                        <span>Ki: 0.5</span>
                        <span>Kd: 0.8</span>
                    </div>
                </div>

                <ArrowRight size={16} className="text-purple-500 rotate-90 mb-2" />

                <div className="bg-gray-800 border border-gray-600 rounded p-2 text-center text-gray-400 text-[9px]">
                    Motor Control Output
                </div>
            </div>
        ),

        '05': ( // E-Commerce
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-xs">
                <div className="bg-pink-900/30 border border-pink-500/30 rounded p-2 text-center mb-3">
                    <Server size={16} className="mx-auto mb-1 text-pink-400" />
                    <div className="text-pink-300 font-mono text-[10px]">Load Balancer</div>
                </div>

                <ArrowRight size={16} className="text-pink-500 rotate-90 mb-2" />

                <div className="grid grid-cols-2 gap-2 mb-3 w-full max-w-sm">
                    <div className="bg-gray-800 border border-gray-600 rounded p-2 text-center text-gray-400 text-[9px]">Auth Service</div>
                    <div className="bg-gray-800 border border-gray-600 rounded p-2 text-center text-gray-400 text-[9px]">Inventory</div>
                    <div className="bg-gray-800 border border-gray-600 rounded p-2 text-center text-gray-400 text-[9px]">Orders</div>
                    <div className="bg-gray-800 border border-gray-600 rounded p-2 text-center text-gray-400 text-[9px]">Analytics</div>
                </div>

                <div className="flex gap-4 w-full max-w-sm">
                    <div className="flex-1 bg-pink-900/30 border border-pink-500/30 rounded p-2 text-center">
                        <Database size={14} className="mx-auto mb-1 text-pink-400" />
                        <div className="text-pink-300 font-mono text-[9px]">Redis Cache</div>
                    </div>
                    <div className="flex-1 bg-pink-900/30 border border-pink-500/30 rounded p-2 text-center">
                        <Database size={14} className="mx-auto mb-1 text-pink-400" />
                        <div className="text-pink-300 font-mono text-[9px]">PostgreSQL</div>
                    </div>
                </div>
            </div>
        )
    };

    return diagrams[projectId] || <div className="text-gray-500">No diagram available</div>;
};

export default TechnicalDiagram;
