import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const commands = [
    {
        cmd: 'cat system_profile.txt',
        output: [
            '[USER] Naibedya // ENGINEERING_MODE',
            '“I build practical systems where hardware, firmware, and cloud talk cleanly to each other.',
            ' Info: 21 | Male | India | 30/07/2003',
            ' Target: EV diagnostics, embedded telemetry, and lightweight automation.”'
        ]
    },
    {
        cmd: 'list_skills --verbose',
        output: [
            '[ELEC] Li-ion fundamentals, Cell balancing, Thermal drift analysis',
            '[FIRMWARE] CAN Bus decoding, ESP32 (RTOS), Sensor smoothing',
            '[CLOUD] MQTT pipelines, Google APIs, Firebase Realtime DB',
            '[SOFT] TensorFlow (Int), Flutter, CI/CD (GitHub Actions)'
        ]
    },
    {
        cmd: 'tail -n 4 field_logs.log',
        output: [
            '[WARN] EV Line: Small torque variance -> visible pack variance',
            '[INFO] Power Plant: Load steps create noticeable frequency ripple',
            '[CRIT] Rail Ops: Redundancy matters more than throughput',
            '[NOTE] "Timing windows determine whether a signal is valid"'
        ]
    }
];

const TechnicalTerminal = () => {
    const [lines, setLines] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        let timeout;
        const runSequence = async () => {
            // Initial prompt
            setLines([{ type: 'prompt', text: '>' }]);
            await new Promise(r => setTimeout(r, 800));

            for (const command of commands) {
                // Type command
                setLines(prev => {
                    const newLines = [...prev];
                    newLines[newLines.length - 1].text += ' ' + command.cmd;
                    return newLines;
                });
                await new Promise(r => setTimeout(r, 600));

                // Show Output
                for (const line of command.output) {
                    setLines(prev => [...prev, { type: 'output', text: line }]);
                    await new Promise(r => setTimeout(r, 100)); // Faster output
                }

                // New Prompt
                setLines(prev => [...prev, { type: 'prompt', text: '>' }]);
                await new Promise(r => setTimeout(r, 1000));
            }
        };

        runSequence();
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <section className="py-20 bg-[#050505] px-6 font-mono border-t border-[#333]">
            <div className="max-w-4xl mx-auto">
                <div className="w-full bg-[#0a0a0a] border border-[#333] rounded-sm shadow-2xl overflow-hidden">
                    {/* Terminal Header */}
                    <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-[#333]">
                        <div className="text-xs text-gray-400">user@naibedya-admin: ~</div>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div
                        ref={scrollRef}
                        className="p-6 h-[400px] overflow-y-auto font-mono text-sm md:text-base"
                    >
                        {lines.map((line, index) => (
                            <div key={index} className="mb-2">
                                {line.type === 'prompt' ? (
                                    <div className="text-[#00FF41] flex gap-2">
                                        <span className="opacity-50">$</span>
                                        <span>{line.text}</span>
                                        {index === lines.length - 1 && <span className="w-2 h-4 bg-[#00FF41] animate-blink inline-block align-middle ml-1"></span>}
                                    </div>
                                ) : (
                                    <div className="text-gray-300 pl-4 border-l border-[#333] ml-1">
                                        {line.text}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalTerminal;
