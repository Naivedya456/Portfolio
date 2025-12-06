/*
EnhancedDashboardSections.jsx
Single-file React component containing new high-impact sections for the Portfolio Dashboard.

Checklist (3-7 bullets):
1. Add this file to src/sections and import into Dashboard layout.
2. Verify Tailwind, Framer Motion and Lucide React are installed and configured.
3. Replace placeholder data in `DATA` with real content from your resume/CVs.
4. Test Visual <-> Technical toggle and responsiveness across breakpoints.
5. Ensure routing/state flows in App.jsx integrate with Dashboard.

Core assumptions:
- Project uses React + Vite and supports JSX in .jsx files.
- Tailwind CSS is configured and index.css includes Tailwind base components.
- Framer Motion and lucide-react are installed.
- You want a single-file drop-in for quick iteration; later split into modular files.

Quick local test:
- Place file at src/sections/EnhancedDashboardSections.jsx
- In Dashboard.jsx: import EnhancedDashboardSections from "../sections/EnhancedDashboardSections" and render <EnhancedDashboardSections />.
- Run dev server: npm run dev (or pnpm/vite equivalent)

Notes:
- This file contains full, ready-to-use components and sample data. Replace DATA entries with your verified metrics and text.
- Styling uses Tailwind utilities. Accessibility and microcopy should be refined before production.
*/

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, BatteryCharging, Cloud, Zap } from "lucide-react";

// -------------------------
// Sample data (replace with real values)
// -------------------------
const DATA = {
    systems: [
        {
            id: "ev-telematics",
            title: "EV Telematics & Real-Time Monitoring",
            subtitle: "Embedded + CAN + Mobile + Cloud",
            bullets: [
                "Real-time CAN parsing and battery signal telemetry",
                "Reduced data latency by 30% through signal pipeline optimization",
                "Improved user engagement by 40% post-launch",
            ],
            impact: "Flagship system used for vehicle monitoring and telematics",
            icon: <BatteryCharging size={20} />,
        },
        {
            id: "assembly-automation",
            title: "Battery Assembly Reporting Automation",
            subtitle: "Python + Google Sheets API",
            bullets: [
                "Automated daily production reports, saving 15 hours/week",
                "Reduced data-entry errors by 40%",
            ],
            impact: "Production workflow automation at Dhoot Transmission",
            icon: <Cloud size={20} />,
        },
        {
            id: "brick-imbalance",
            title: "Brick Imbalance Detection & DOE",
            subtitle: "Root Cause Analysis + Process Optimization",
            bullets: [
                "Conducted DOE for defect mitigation",
                "Contributed to a prototype with +25% energy density improvement",
            ],
            impact: "Process optimization applied to EV cell assembly",
            icon: <Zap size={20} />,
        },
    ],

    modes: {
        visual: {
            techRadar: [
                "Systems Thinking",
                "Human-Centered Engineering",
                "Connected Experiences",
                "Automation-First Mindset",
                "Real-Time Decision Systems",
                "Sustainable Technology Vision",
                "Iterative Product Craft",
            ],
            skillHighlights: [
                "Builds systems that feel alive and responsive",
                "Transforms raw signals into meaningful insights",
                "Bridges hardware, software, and user experience",
                "Designs for clarity, reliability, and flow",
                "Loves simplifying complex ecosystems",
            ],
            achievements: [
                "Designed connected experiences that keep users engaged in real time",
                "Helped teams shift from manual processes to automated intelligence",
                "Crafted product flows that bring clarity to complex systems",
                "Built features that prioritize user trust, stability, and delight",
            ],
            focusAreas: [
                "Real-time digital experiences",
                "Automated workflows",
                "Smart connected products",
                "Data-guided decision flows",
                "User-first engineering",
            ],
        },

        technical: {
            skillMatrix: [
                { name: "Python Automation", level: "Advanced" },
                { name: "CAN Bus Data Parsing", level: "Advanced" },
                { name: "Embedded Systems Debugging", level: "Advanced" },
                { name: "Cloud IoT Workflows", level: "Strong" },
                { name: "Battery Analytics", level: "Strong" },
                { name: "Google API Integrations", level: "Advanced" },
                { name: "CI/CD Workflows", level: "Intermediate" },
                { name: "Signal Processing Basics", level: "Intermediate" },
                { name: "API Architecture", level: "Strong" },
                { name: "Data Validation Pipelines", level: "Intermediate" },
            ],
            technicalExpertise: [
                "Low-latency data pipelines",
                "Real-time telemetry systems",
                "API-driven automation",
                "Cloud messaging protocols",
                "IoT-based sensor orchestration",
                "Battery health analytics",
                "Fault pattern detection",
                "Structured data pipelines",
                "Mobile–cloud sync architecture",
                "Process optimization frameworks",
            ],
            engineeringMetrics: [
                "Reduced data latency in real-time systems by 30%",
                "Automated workflows reclaiming 15+ hours/week productivity",
                "Improved signal accuracy with optimized processing paths",
                "Designed telemetry flows increasing user interaction reliability",
                "Introduced automated validation scripts reducing repetitive QA cycles",
            ],
            technicalDomains: [
                "System Integration",
                "Telemetry Engineering",
                "Cloud-Connected Architectures",
                "Automated Reporting Systems",
                "Edge Data Processing",
                "Battery Diagnostics",
                "Firmware–App Synchronization",
            ],
        },
    },

    timeline: [
        {
            year: "2023",
            title: "Indian Railways - Student Trainee",
            notes: "Safety compliance improved by 40%; operational workflow insights",
        },
        {
            year: "2024",
            title: "Dhoot Transmission - Intern",
            notes: "Automated production reporting; saved 15+ hours weekly",
        },
        {
            year: "2025",
            title: "Erkey Motors - Project Lead",
            notes: "Developed real-time EV telematics system; latency reduced 30%",
        },
    ],

    philosophy: [
        "Prefer end-to-end systems over isolated features",
        "Design for observability and production-readiness",
        "Automate manual workflows to scale engineering impact",
    ],

    future: [
        "Real-time BMS intelligence layer",
        "Low-cost telematics hardware stack",
        "AI-driven predictive maintenance for EV fleets",
    ],

    testimonials: [
        {
            who: "Manager at Erkey",
            note: "Owns problems end-to-end and ships pragmatic solutions.",
        },
        {
            who: "Lead at Dhoot",
            note: "Turned manual reporting into a reliable automated pipeline.",
        },
    ],
};

// -------------------------
// Small presentational helpers
// -------------------------
const Card = ({ children, className = "" }) => (
    <div className={`bg-white/60 dark:bg-slate-900/60 p-5 rounded-2xl shadow-sm border border-white/5 ${className}`}>
        {children}
    </div>
);

// -------------------------
// Systems I’ve Built
// -------------------------
function SystemsBuilt({ systems }) {
    return (
        <section id="systems-built" className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Systems I’ve Built</h2>
                <p className="text-sm text-slate-500">Production-grade systems and outcomes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {systems.map((s) => (
                    <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        <Card>
                            <div className="flex items-start gap-3">
                                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">{s.icon}</div>
                                <div>
                                    <h3 className="font-medium">{s.title}</h3>
                                    <p className="text-xs text-slate-500">{s.subtitle}</p>
                                </div>
                            </div>

                            <ul className="mt-4 list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-2">
                                {s.bullets.map((b, idx) => (
                                    <li key={idx}>{b}</li>
                                ))}
                            </ul>

                            <div className="mt-4 text-xs text-slate-500">Impact: {s.impact}</div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// -------------------------
// Tech Radar (visual) + Skill Matrix (technical)
// -------------------------
function SkillsPanel({ data, mode }) {
    if (mode === "visual") {
        return (
            <section id="skills-panel" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <h4 className="font-semibold">Tech Radar</h4>
                    <p className="text-sm text-slate-500">Visual view of capability clusters.</p>
                    <div className="mt-4 space-y-2">
                        {data.techRadar.map((v) => (
                            <motion.div key={v} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-slate-800" />
                                <div className="text-sm">{v}</div>
                            </motion.div>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h4 className="font-semibold">Focus Areas</h4>
                    <p className="text-sm text-slate-500">Key themes in my work.</p>
                    <div className="mt-4 space-y-2">
                        {data.focusAreas.map((v) => (
                            <motion.div key={v} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <div className="text-sm">{v}</div>
                            </motion.div>
                        ))}
                    </div>
                </Card>
            </section>
        );
    }

    // Technical Mode
    return (
        <section id="skills-panel" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
                <h4 className="font-semibold">Skill Matrix</h4>
                <p className="text-sm text-slate-500">Measurable technical proficiency.</p>
                <div className="mt-4 space-y-3">
                    {data.skillMatrix.map((t) => (
                        <div key={t.name} className="flex items-center justify-between">
                            <div className="text-sm">{t.name}</div>
                            <div className="text-xs text-slate-500">{t.level}</div>
                        </div>
                    ))}
                </div>
            </Card>

            <Card>
                <h4 className="font-semibold">Technical Expertise</h4>
                <p className="text-sm text-slate-500">Core engineering domains.</p>
                <div className="mt-4 space-y-2">
                    {data.technicalExpertise.map((v) => (
                        <motion.div key={v} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <div className="text-sm">{v}</div>
                        </motion.div>
                    ))}
                </div>
            </Card>
        </section>
    );
}

// -------------------------
// Deep Dive Case Studies
// -------------------------
function DeepDive({ systems }) {
    return (
        <section id="deep-dive" className="mt-10">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Deep Dive: How I Solve Problems</h2>
                <p className="text-sm text-slate-500">Frameworks, not just outcomes.</p>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                {systems.map((s) => (
                    <Card key={`deep-${s.id}`}>
                        <h3 className="font-medium">{s.title}</h3>
                        <p className="text-xs text-slate-500">{s.subtitle}</p>

                        <div className="mt-3 text-sm">
                            <strong>Core flow:</strong>
                            <ol className="list-decimal list-inside mt-2 text-slate-700 dark:text-slate-300">
                                <li>Gather observability metrics and logs</li>
                                <li>Perform targeted analysis (RCA / DOE)</li>
                                <li>Prototype mitigation and validate via small-batch tests</li>
                                <li>Automate and observe at scale</li>
                            </ol>
                        </div>

                        <div className="mt-3 text-sm text-slate-500">Impact snapshot: {s.impact}</div>
                    </Card>
                ))}
            </div>
        </section>
    );
}

// -------------------------
// Impact Timeline
// -------------------------
function ImpactTimeline({ timeline }) {
    return (
        <section id="impact-timeline" className="mt-10">
            <h2 className="text-2xl font-semibold">Impact Timeline</h2>
            <div className="mt-6 space-y-4">
                {timeline.map((t) => (
                    <motion.div key={t.year} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex gap-4 items-start">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border">{t.year}</div>
                        <div>
                            <div className="font-medium">{t.title}</div>
                            <div className="text-sm text-slate-500">{t.notes}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// -------------------------
// Engineering Philosophy + Future
// -------------------------
function PhilosophyAndFuture({ philosophy, future }) {
    return (
        <section id="philosophy" className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
                <h4 className="font-semibold">Engineering Philosophy</h4>
                <div className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {philosophy.map((p, i) => (
                        <div key={i}>• {p}</div>
                    ))}
                </div>
            </Card>

            <Card>
                <h4 className="font-semibold">Systems I Want to Build Next</h4>
                <div className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {future.map((f, i) => (
                        <div key={i}>• {f}</div>
                    ))}
                </div>
            </Card>
        </section>
    );
}

// -------------------------
// Testimonials Carousel (simple)
// -------------------------
function Testimonials({ testimonials }) {
    return (
        <section id="testimonials" className="mt-10">
            <h4 className="text-2xl font-semibold">Recommendations</h4>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.map((t, i) => (
                    <Card key={i}>
                        <div className="font-medium">{t.who}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300 mt-2">“{t.note}”</div>
                    </Card>
                ))}
            </div>
        </section>
    );
}

// -------------------------
// Main exported component
// -------------------------
export default function EnhancedDashboardSections({ className = "" }) {
    const [mode, setMode] = useState("visual"); // visual or technical

    return (
        <div className={`space-y-10 ${className}`}>
            {/* Mode toggle */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Cpu size={18} />
                    <h1 className="text-xl font-semibold">Enhanced Dashboard</h1>
                </div>

                <div className="flex items-center gap-3">
                    <div className="text-sm text-slate-500">Mode</div>
                    <div className="inline-flex rounded-full bg-slate-200 p-1">
                        <button
                            className={`px-3 py-1 rounded-full text-sm ${mode === "visual" ? "bg-white shadow" : "opacity-70"}`}
                            onClick={() => setMode("visual")}
                        >
                            Visual
                        </button>
                        <button
                            className={`px-3 py-1 rounded-full text-sm ${mode === "technical" ? "bg-white shadow" : "opacity-70"}`}
                            onClick={() => setMode("technical")}
                        >
                            Technical
                        </button>
                    </div>
                </div>
            </div>

            {/* Systems */}
            <SystemsBuilt systems={DATA.systems} />

            {/* Skills Panel - toggles view */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={mode}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <SkillsPanel data={DATA.modes[mode]} mode={mode} />
                </motion.div>
            </AnimatePresence>

            {/* Deep Dive */}
            <DeepDive systems={DATA.systems} />

            {/* Timeline */}
            <ImpactTimeline timeline={DATA.timeline} />

            {/* Philosophy + Future */}
            <PhilosophyAndFuture philosophy={DATA.philosophy} future={DATA.future} />

            {/* Testimonials */}
            <Testimonials testimonials={DATA.testimonials} />

            {/* Quick footnote */}
            <div className="text-xs text-slate-500">
                Tip: Replace DATA object with verified metrics and expand each card into dedicated route pages when ready.
            </div>
        </div>
    );
}
